import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { UserInfo } from "../types";

interface UserContextType {
  discordData?: UserInfo["discord"];
  twitterData?: UserInfo["twitter"];
  email?: UserInfo["email"];
  setDiscordData: (data: UserInfo["discord"] | undefined) => void;
  setTwitterData: (data: UserInfo["twitter"] | undefined) => void;
  setEmail: (data: UserInfo["email"] | undefined) => void;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export function UserProvider({ children }: { children: ReactNode }) {
  const [discordData, setDiscordData] = useState<UserInfo["discord"]>();
  const [twitterData, setTwitterData] = useState<UserInfo["twitter"]>();
  const [email, setEmail] = useState<UserInfo["email"]>();

  const memoizedValue = useMemo(
    () => ({
      discordData,
      twitterData,
      email,
      setDiscordData,
      setTwitterData,
      setEmail,
    }),
    [discordData, twitterData, email]
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
