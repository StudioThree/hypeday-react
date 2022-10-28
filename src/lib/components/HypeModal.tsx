import ReactModal from "react-modal";

interface HypeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function HypeModal({
  isOpen,
  onRequestClose,
  title,
  children,
}: HypeModalProps) {
  return (
    <ReactModal
      appElement={document.body as HTMLElement}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={"Open in Phantom Mobile App Modal"}
      overlayClassName={"hypeday-modal-overlay"}
      className={"hypeday-modal-content"}
    >
      {title && <h3 className="hypeday-h3">{title}</h3>}
      <div className="hypeday-modal-close" onClick={onRequestClose}>
        &times;
      </div>
      {children}
    </ReactModal>
  );
}
