interface SectionProps {
    title: string;
    buttonLabel?: string;
    onClick: () => void;
    info: (JSX.Element | string)[];
}
export default function Section({ title, buttonLabel, onClick, info, }: SectionProps): JSX.Element;
export {};
