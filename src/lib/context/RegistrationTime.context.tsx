import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { GetProjectResponse } from "../types";

export enum RegistrationStatus {
  willOpen = "willOpen",
  alwaysOpen = "alwaysOpen",
  willClose = "willClose",
  closed = "closed",
}

interface RegistrationTimeContextType {
  status: RegistrationStatus;
  dateString?: string;
  setData: (data: GetProjectResponse) => void;
}

const RegistrationTimeContext = createContext<RegistrationTimeContextType>(
  {} as RegistrationTimeContextType
);

export function RegistrationTimeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [projectData, setProjectData] = useState<GetProjectResponse>();
  const [status, setStatus] = useState<RegistrationStatus>(
    RegistrationStatus.alwaysOpen
  );
  const [dateString, setDateString] = useState<string>();

  useEffect(() => {
    const now = Date.now();
    const startDate = projectData?.signupAccess?.isStartDateRequired
      ? new Date(projectData?.signupAccess?.startDate as string).getTime()
      : null;
    const endDate = projectData?.signupAccess?.isEndDateRequired
      ? new Date(projectData?.signupAccess?.endDate as string).getTime()
      : null;

    // no time restrictions, so registration is always open
    if (!startDate && !endDate) {
      setStatus(RegistrationStatus.alwaysOpen);
      return;
    }

    if (startDate && startDate > now) {
      setStatus(RegistrationStatus.willOpen);
      setDateString(projectData?.signupAccess?.startDate as string);

      let id = setTimeout(() => {
        setStatus(
          endDate ? RegistrationStatus.willClose : RegistrationStatus.alwaysOpen
        );
        setDateString(projectData?.signupAccess?.endDate);
        if (endDate) {
          id = setTimeout(() => {
            setStatus(RegistrationStatus.closed);
            setDateString(projectData?.signupAccess?.endDate as string);
          }, endDate - Date.now());
        }
      }, startDate - now);
      return () => clearTimeout(id);
    }

    if (startDate && startDate < now) {
      if (endDate) {
        setStatus(RegistrationStatus.willClose);
        setDateString(projectData?.signupAccess?.endDate);
        const id = setTimeout(() => {
          setStatus(RegistrationStatus.closed);
        }, endDate - now);
        return () => clearTimeout(id);
      }

      setStatus(RegistrationStatus.alwaysOpen);
      return;
    }

    if (endDate && endDate > now) {
      setStatus(RegistrationStatus.willClose);
      setDateString(projectData?.signupAccess?.endDate);
      const id = setTimeout(() => {
        setStatus(RegistrationStatus.closed);
        setDateString(projectData?.signupAccess?.endDate);
      }, endDate - now);
      return () => clearTimeout(id);
    }

    if (endDate && endDate < now) {
      setStatus(RegistrationStatus.closed);
      setDateString(projectData?.signupAccess?.endDate);
      return;
    }
  }, [projectData]);

  const memoizedValue = useMemo(
    () => ({
      status,
      dateString,
      setData: setProjectData,
    }),
    [status, dateString, setProjectData]
  );

  return (
    <RegistrationTimeContext.Provider value={memoizedValue}>
      {children}
    </RegistrationTimeContext.Provider>
  );
}

export default function useRegistrationTimeContext() {
  return useContext(RegistrationTimeContext);
}
