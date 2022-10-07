/// <reference types="react" />
interface HypeDayReactProps {
    appId: string;
    projectId: string;
    userToken?: string;
    testing?: boolean;
}
export default function HypeDayReact({ appId, projectId, userToken, testing, }: HypeDayReactProps): JSX.Element;
export {};
