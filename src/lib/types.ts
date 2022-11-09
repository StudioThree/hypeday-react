type EvmChains = "ethereum" | "polygon" | "avalanche";
export type SupportedChains = EvmChains | "solana" | "flow";

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

export interface UserInfo {
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
    isLikeRequired?: boolean;
    isMinFollowersRequired?: boolean;
    isAccountCreatedRequired?: boolean;
    follow?: string;
    retweetUrl?: string;
    likeUrl?: string;
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
  showLink: boolean;
}

export interface SectionProps {
  projectData: GetProjectResponse;
  appId: string;
  hasUser: boolean;
  logger?: Logger;
}

export interface HypeJWTPayload {
  iss: string;
  sub: string;
  aud: string;
  exp: number;
  email?: string;
  wallets?: {
    [K in SupportedChains]?: string;
  };
}

export declare class Logger {
  info(
    message: string,
    eventCode: string,
    data?: { [key: string]: string | number | boolean | undefined }
  ): void;

  warning(
    message: string,
    eventCode: string,
    data?: { [key: string]: string | number | boolean | undefined }
  ): void;

  error(message: string, eventCode: string, error: unknown): void;
}
