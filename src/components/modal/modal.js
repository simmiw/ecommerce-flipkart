import React from "react";
import Styled from "./styled";

const Modal = ({ children, onCloseTrigger }) => {
  return (
    <Styled>
      <div className="modal-container">
        <div className="modal-content">{children}</div>
        <button className="close-modal" onClick={onCloseTrigger}>
          ✕
        </button>
      </div>
    </Styled>
  );
};

export default Modal;
