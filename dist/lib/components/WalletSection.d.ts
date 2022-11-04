/// <reference types="react" />
import type { SectionProps } from "../types";
export default function WalletSectionWrapper({ projectData, appId, hasUser, token, logger, }: SectionProps & {
    token: string;
}): JSX.Element;
