import React from "react";
import Styled from "./styled";

const Modal = ({ children }) => {
  return (
    <Styled>
      <div className="modal-container">{children}</div>
    </Styled>
  );
};

export default Modal;
