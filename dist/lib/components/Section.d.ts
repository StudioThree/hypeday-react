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
}
export default function Section({ title, rightText, buttonDisabled, onClick, info, isLoading, showButton, errorMessage, }: SectionProps): JSX.Element;
export {};
