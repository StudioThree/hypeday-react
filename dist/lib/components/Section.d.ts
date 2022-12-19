/// <reference types="react" />
interface SectionProps {
    title: string;
    buttonDisabled?: boolean;
    rightText?: string;
    onClick: () => void;
    info: (JSX.Element | string)[];
    isLoading?: boolean;
    showButton?: boolean;
    errorMessage?: string;
    style?: React.CSSProperties;
}
export default function Section({ title, rightText, buttonDisabled, onClick, info, isLoading, showButton, errorMessage, style, }: SectionProps): JSX.Element;
export {};
