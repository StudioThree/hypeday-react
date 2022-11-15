import { ReactNode } from "react";
import { UserInfo } from "../types";
interface UserContextType {
    discordData?: UserInfo["discord"];
    twitterData?: UserInfo["twitter"];
    setDiscordData: (data: UserInfo["discord"] | undefined) => void;
    setTwitterData: (data: UserInfo["twitter"] | undefined) => void;
}
export declare function UserProvider({ children }: {
    children: ReactNode;
}): JSX.Element;
export default function useUserContext(): UserContextType;
export {};
