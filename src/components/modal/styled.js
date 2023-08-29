import styled from "styled-components";

const Styled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-container {
    position: relative;
    background: #fff;
    display: flex;
    max-height: 90%;
    min-width: 400px;
    max-width: 90%;
    height: 528px;
    border-radius: 2px;
  }

  .modal-content {
    max-width: 100%;
    overflow: auto;
  }

  .close-modal {
    position: absolute;
    top: 0;
    right: -32px;
    padding: 0;
    background: transparent;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 32px;
    line-height: 1;
  }
`;

export default Styled;
