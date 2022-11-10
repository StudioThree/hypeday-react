import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { UserInfo } from "../types";

interface UserContextType {
  discordData?: UserInfo["discord"];
  twitterData?: UserInfo["twitter"];
  setDiscordData: (data: UserInfo["discord"] | undefined) => void;
  setTwitterData: (data: UserInfo["twitter"] | undefined) => void;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export function UserProvider({ children }: { children: ReactNode }) {
  const [discordData, setDiscordData] = useState<UserInfo["discord"]>();
  const [twitterData, setTwitterData] = useState<UserInfo["twitter"]>();

  const memoizedValue = useMemo(
    () => ({
      discordData,
      twitterData,
      setDiscordData,
      setTwitterData,
    }),
    [discordData, setDiscordData, twitterData, setTwitterData]
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
