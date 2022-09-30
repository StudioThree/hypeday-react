import type { GetProjectResponse } from "../types";
export default function DiscordSection({ projectData, appId, hasUser, }: {
    projectData?: GetProjectResponse;
    appId: string;
    hasUser: boolean;
}): JSX.Element | null;
