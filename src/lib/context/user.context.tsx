import jwtDecode from "jwt-decode";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getProject, setApiKeyHeader, setAuthorizationHeader } from "../api";
import { shortenWalletAddress } from "../helpers";
import {
  GetProjectResponse,
  HypeDayReactProps,
  HypeJWTPayload,
  UserInfo,
} from "../types";
import useRegistrationTimeContext from "./RegistrationTime.context";

interface UserContextType {
  discordData?: UserInfo["discord"];
  twitterData?: UserInfo["twitter"];
  email?: UserInfo["email"];
  project?: GetProjectResponse;
  isProjectLoading: boolean;
  projectError: string;
  walletAddr?: string;
  shouldLogin: boolean;
  fetchProjectData: () => Promise<void>;
  setDiscordData: (data: UserInfo["discord"] | undefined) => void;
  setTwitterData: (data: UserInfo["twitter"] | undefined) => void;
  setEmail: (data: UserInfo["email"] | undefined) => void;
  setWalletAddr: (addr: string) => void;
  setUserToken: (token: string) => void;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export enum LoginMethod {
  userToken = "userToken",
  wallet = "wallet",
  email = "email",
}

export function UserProvider({
  children,
  userToken,
  apiKey,
  appId,
  projectId,
  logger,
}: {
  children: ReactNode;
} & HypeDayReactProps) {
  const [shouldLogin, setShouldLogin] = useState(!userToken);
  const [project, setProject] = useState<GetProjectResponse>();
  const [isProjectLoading, setIsProjectLoading] = useState(true);
  const [projectError, setProjectError] = useState("");
  const [discordData, setDiscordData] = useState<UserInfo["discord"]>();
  const [twitterData, setTwitterData] = useState<UserInfo["twitter"]>();
  const [email, setEmail] = useState<UserInfo["email"]>();
  const [walletAddr, setWalletAddr] = useState<string>();

  const { setData } = useRegistrationTimeContext();

  useEffect(() => {
    if (!project) return;

    const { userInfo } = project;

    setDiscordData(userInfo?.discord);
    setTwitterData(userInfo?.twitter);
    setEmail(userInfo?.email);

    if (userToken) {
      const wallet =
        jwtDecode<HypeJWTPayload>(userToken).wallets?.[project.chain];
      setWalletAddr(shortenWalletAddress(wallet));
    } else if (userInfo?.walletAddress) {
      setWalletAddr(shortenWalletAddress(userInfo?.walletAddress));
    }
  }, [project, userToken]);

  useEffect(() => {
    if (userToken) {
      setAuthorizationHeader(userToken);
    }

    if (apiKey) {
      setApiKeyHeader(apiKey);
      const savedToken = localStorage?.getItem("hypeUserToken");

      if (savedToken) {
        setShouldLogin(false);
        setAuthorizationHeader(savedToken);
      }
    }
  }, [userToken, apiKey]);

  const fetchProjectData = useCallback(async () => {
    setIsProjectLoading(true);
    setProjectError("");
    getProject({ appId, projectId })
      .then((data) => {
        setProject(data);
        setData(data);
      })
      .catch((err) => {
        logger?.error(
          "HypeDayReact: Error fetching project data",
          "hype01",
          err
        );
        console.error("HypeDayReact: Error fetching project data", err);
        setProjectError(
          typeof err === "string"
            ? err
            : err.message || "Something went wrong. Please try again later."
        );
      })
      .finally(() => setIsProjectLoading(false));
  }, [appId, projectId, logger, setData]);

  useEffect(() => {
    fetchProjectData();
  }, [fetchProjectData]);

  const setUserToken = useCallback((token: string) => {
    setShouldLogin(false);
    localStorage?.setItem("hypeUserToken", token);
    setAuthorizationHeader(token);
  }, []);

  const memoizedValue = useMemo(
    () => ({
      discordData,
      twitterData,
      email,
      userToken,
      apiKey,
      project,
      isProjectLoading,
      projectError,
      shouldLogin,
      walletAddr,
      fetchProjectData,
      setDiscordData,
      setTwitterData,
      setEmail,
      setShouldLogin,
      setWalletAddr,
      setUserToken,
    }),
    [
      discordData,
      twitterData,
      email,
      userToken,
      apiKey,
      project,
      isProjectLoading,
      projectError,
      shouldLogin,
      walletAddr,
      fetchProjectData,
      setWalletAddr,
      setUserToken,
    ]
  );

  return (
    <UserContext.Provider value={memoizedValue}>
      {children}
    </UserContext.Provider>
  );
}

export default function useUserContext() {
  return useContext(UserContext);
}
