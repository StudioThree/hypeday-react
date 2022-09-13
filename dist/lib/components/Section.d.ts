interface SectionProps {
    title: string;
    buttonDisabled?: boolean;
    rightText?: string;
    onClick: () => void;
    info: (JSX.Element | string)[];
    isLoading?: boolean;
    showButton?: boolean;
}
export default function Section({ title, rightText, buttonDisabled, onClick, info, isLoading, showButton, }: SectionProps): JSX.Element;
export {};
