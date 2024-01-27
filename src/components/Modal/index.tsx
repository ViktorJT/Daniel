import { StyledModal } from "./styles";

const Modal = ({ isOpen, children, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <StyledModal onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </StyledModal>
  );
};

export default Modal;
