/// <reference types="react" />
import type { Logger } from "./types";
interface HypeDayReactProps {
    appId: string;
    projectId: string;
    logger?: Logger;
    userToken?: string;
    testing?: boolean;
}
export default function WrappedHypeDayReact(props: HypeDayReactProps): JSX.Element;
export {};
