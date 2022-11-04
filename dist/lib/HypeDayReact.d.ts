/// <reference types="react" />
import type { Logger } from "./types";
interface HypeDayReactProps {
    appId: string;
    projectId: string;
    userToken: string;
    logger?: Logger;
}
export default function WrappedHypeDayReact(props: HypeDayReactProps): JSX.Element;
export {};
