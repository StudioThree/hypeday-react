/// <reference types="react" />
import type { SectionProps } from "../types";
export default function RegisterButton({ projectData, appId, inputRef, logger, }: SectionProps & {
    inputRef: React.RefObject<HTMLInputElement>;
}): JSX.Element;
