export declare function setAuthorizationHeader(token?: string): void;
export declare function setApiKeyHeader(apiKey?: string): void;
export declare function getProject({ appId, projectId, }: {
    appId: string;
    projectId: string;
}): Promise<any>;
export declare function loginWithWallet(data: {
    appId: string;
    address: string;
    chain: string;
}): Promise<any>;
export declare function verifyWalletLogin(data: {
    appId: string;
    address: string;
    chain: string;
    signature: string;
}): Promise<any>;
export declare function addWallet(data: {
    appId: string;
    address: string;
    chain: string;
}): Promise<any>;
export declare function verifyWallet(data: {
    appId: string;
    address: string;
    signature: string;
    chain: string;
}): Promise<any>;
export declare function loginWithEmail(data: {
    appId: string;
    email: string;
    emailPermission: boolean;
}): Promise<any>;
export declare function verifyEmail(data: {
    appId: string;
    email: string;
    otp: string;
}): Promise<any>;
export declare function addNewEmail(data: {
    appId: string;
    email: string;
    emailPermission: boolean;
}): Promise<any>;
export declare function verifyNewEmail(data: {
    appId: string;
    email: string;
    otp: string;
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
