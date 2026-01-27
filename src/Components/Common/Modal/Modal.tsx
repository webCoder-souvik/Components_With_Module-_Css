// Modal.tsx
import { useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal = ({ children, onClose }: ModalProps) => {
  const modalRoot = document.getElementById("modal-root")!;

  // Close on ESC key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div>
      {children}
      {/* Design your Modal according to your requirment */}
    </div>,
    modalRoot,
  );
};
