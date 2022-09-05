export declare type EvmChains = "ethereum" | "polygon" | "avalanche";
export declare type SupportedChains = EvmChains | "solana" | "flow";
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
    discord?: {
        username: string;
    };
    twitter?: {
        username: string;
    };
    registered?: boolean;
    email?: string;
}
export interface GetProjectResponse {
    id: string;
    chain: SupportedChains;
    createdAt: string;
    customfield?: {
        enabled: boolean;
        labels: string[];
    };
    email?: {
        isEmailRequired?: boolean;
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
export {};