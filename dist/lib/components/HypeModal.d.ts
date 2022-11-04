/// <reference types="react" />
interface HypeModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    title?: string;
    children: React.ReactNode;
}
export default function HypeModal({ isOpen, onRequestClose, title, children, }: HypeModalProps): JSX.Element;
export {};
