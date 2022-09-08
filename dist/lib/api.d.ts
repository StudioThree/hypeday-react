export declare function getProject({ appId, projectId, userId, }: {
    appId: string;
    projectId: string;
    userId?: string;
}): Promise<any>;
export declare function getOauthUrl({ provider, appId, projectId, userId, returnUrl, }: {
    provider: "twitter" | "discord";
    appId: string;
    projectId: string;
    userId: string;
    returnUrl: string;
}): Promise<any>;
