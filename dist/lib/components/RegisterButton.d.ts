import type { GetProjectResponse } from "../types";
export default function RegisterButton({ projectData, appId, walletAddress, inputRef, }: {
    projectData?: GetProjectResponse;
    appId: string;
    walletAddress?: string;
    inputRef: React.RefObject<HTMLInputElement>;
}): JSX.Element;
