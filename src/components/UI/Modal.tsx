import { createPortal } from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {createPortal(
        <div className="backdrop">
          <div className="modal">
            <div className="modal-header">
              <h2>{title}</h2>
              <button className="close-btn" onClick={onClose}>
                x
              </button>
            </div>
            <div className="modal-content">{children}</div>
          </div>
        </div>,
        document.getElementById("modal")!,
      )}
    </>
  );
}
