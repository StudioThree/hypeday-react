import { ReactNode } from "react";
import { GetProjectResponse } from "../types";
export declare enum RegistrationStatus {
    willOpen = "willOpen",
    alwaysOpen = "alwaysOpen",
    willClose = "willClose",
    closed = "closed"
}
interface RegistrationTimeContextType {
    status: RegistrationStatus;
    dateString?: string;
    setData: (data: GetProjectResponse) => void;
}
export declare function RegistrationTimeProvider({ children, }: {
    children: ReactNode;
}): JSX.Element;
export default function useRegistrationTimeContext(): RegistrationTimeContextType;
export {};
