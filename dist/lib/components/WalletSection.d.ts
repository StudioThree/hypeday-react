/// <reference types="react" />
import type { GetProjectResponse } from "../types";
export default function WalletSectionWrapper({ projectData, appId, hasUser, }: {
    projectData?: GetProjectResponse;
    appId: string;
    hasUser: boolean;
}): JSX.Element;
