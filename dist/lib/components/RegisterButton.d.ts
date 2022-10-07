/// <reference types="react" />
import type { GetProjectResponse } from "../types";
export default function RegisterButton({ projectData, appId, hasUser, inputRef, }: {
    projectData?: GetProjectResponse;
    appId: string;
    hasUser: boolean;
    inputRef: React.RefObject<HTMLInputElement>;
}): JSX.Element;
