import { ReactNode } from "react";
import { GetProjectResponse, HypeDayReactProps, UserInfo } from "../types";
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
export declare enum LoginMethod {
    userToken = "userToken",
    wallet = "wallet",
    email = "email"
}
export declare function UserProvider({ children, userToken, apiKey, appId, projectId, logger, }: {
    children: ReactNode;
} & HypeDayReactProps): JSX.Element;
export default function useUserContext(): UserContextType;
export {};
