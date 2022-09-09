import type { SupportedChains } from "./types";
export declare function getProject({ appId, projectId, walletAddress, }: {
    appId: string;
    projectId: string;
    walletAddress?: string;
}): Promise<any>;
export declare function getOauthUrl({ provider, appId, projectId, chain, walletAddress, returnUrl, }: {
    provider: "twitter" | "discord";
    appId: string;
    projectId: string;
    chain: SupportedChains;
    walletAddress: string;
    returnUrl: string;
}): Promise<any>;
