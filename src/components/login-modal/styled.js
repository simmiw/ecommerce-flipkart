import styled from "styled-components";

const LoginModalStyled = styled.div`
  background: #fff;
  overflow: auto;
  display: flex;
  max-width: 750px;
  min-width: 650px;
  height: 528px;
  border-radius: 2px;
  border: 2px solid rgb(40, 116, 240);

  .login-info {
    background-color: rgb(40, 116, 240);
    display: inline-block;
    span {
      color: #fff;
    }

    p {
      color: #fff;
    }
  }
`;

export default LoginModalStyled;
