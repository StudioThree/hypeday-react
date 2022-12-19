/// <reference types="react" />
import { Logger } from "../types";
interface EmailModalProps {
    isOpen: boolean;
    onClose: () => void;
    setError: (error: string) => void;
    appId: string;
    logger?: Logger;
}
export default function EmailModal({ isOpen, onClose, setError, appId, logger, }: EmailModalProps): JSX.Element;
export {};
