interface SectionProps {
    title: string;
    buttonDisabled?: boolean;
    rightText?: string;
    onClick: () => void;
    info: (JSX.Element | string)[];
}
export default function Section({ title, rightText, buttonDisabled, onClick, info, }: SectionProps): JSX.Element;
export {};
