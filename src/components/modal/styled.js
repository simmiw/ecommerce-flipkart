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
    background: #fff;
    overflow: auto;
    display: flex;
    max-height: 90%;
    min-width: 650px;
    max-width: 750px;
    height: 528px;
    border-radius: 2px;
  }

  .login-info {
    background-color: rgb(40, 116, 240);
    display: inline-block;
    padding: 40px 33px;
    span {
      color: #fff;
    }
    p {
      color: #fff;
    }
  }
  .login-form {
    padding: 56px 35px 16px;
  }
`;

export default Styled;
