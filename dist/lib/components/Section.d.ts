interface SectionProps {
    title: string;
    showButton?: boolean;
    buttonLabel?: string;
    onClick: () => void;
    info: (JSX.Element | string)[];
}
export default function Section({ title, showButton, buttonLabel, onClick, info, }: SectionProps): JSX.Element;
export {};
