type EvmChains = "ethereum" | "polygon" | "avalanche";
type SupportedChains = EvmChains | "solana" | "flow";

interface DiscordRequirement {
  enabled?: boolean;
  isServerRequired?: boolean;
  isRoleRequired?: boolean;
  isShouldJoinBeforeRequired?: boolean;
  serverDisplayName?: string;
  serverLink?: string;
  roleDisplayNames?: string[];
  shouldJoinBefore?: string;
}

interface UserInfo {
  discord?: { username: string };
  twitter?: { username: string };
  registered?: boolean;
  email?: string;
  walletAddress?: string;
}

export interface GetProjectResponse {
  id: string;
  chain: SupportedChains;
  createdAt: string;
  signupAccess?: {
    isStartDateRequired?: boolean;
    isEndDateRequired?: boolean;
    startDate?: string;
    endDate?: string;
  };
  customfield?: {
    enabled: boolean;
    labels: string[];
  };
  discord?: DiscordRequirement;
  discord2?: DiscordRequirement;
  twitter?: {
    enabled?: boolean;
    isFollowRequired?: boolean;
    isRetweetRequired?: boolean;
    isMinFollowersRequired?: boolean;
    isAccountCreatedRequired?: boolean;
    follow?: string;
    retweetUrl?: string;
    minFollowers?: number;
    accountCreated?: string;
  };
  wallet?: {
    required: boolean;
    balance?: string;
    isBalanceRequired?: boolean;
    isNftRequired?: boolean;
    nftCollection?: {
      chain?: SupportedChains;
      name?: string;
      url?: string;
    };
  };
  userInfo?: UserInfo;
}
