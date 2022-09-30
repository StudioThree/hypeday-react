export declare function setAuthorizationHeader(token: string | undefined): void;
export declare function getProject({ appId, projectId, }: {
    appId: string;
    projectId: string;
}): Promise<any>;
export declare function getOauthUrl({ provider, appId, projectId, returnUrl, }: {
    provider: "twitter" | "discord";
    appId: string;
    projectId: string;
    returnUrl: string;
    userToken?: string;
}): Promise<any>;
export declare function register({ appId, projectId, customField, }: {
    appId: string;
    projectId: string;
    customField: string;
}): Promise<any>;
