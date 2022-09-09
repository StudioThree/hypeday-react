import type { GetProjectResponse } from "../types";
export default function DiscordSection({ projectData, appId, walletAddress, }: {
    projectData?: GetProjectResponse;
    appId: string;
    walletAddress?: string;
}): JSX.Element | null;
