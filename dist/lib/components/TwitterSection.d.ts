import type { GetProjectResponse } from "../types";
export default function TwitterSection({ projectData, appId, userId, }: {
    projectData?: GetProjectResponse;
    appId: string;
    userId?: string;
}): JSX.Element | null;
