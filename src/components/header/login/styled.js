import styled from "styled-components";

const Styled = styled.div`
  display: flex;
  color: #212121;
  margin: 0 auto;
  border-radius: 2px;
  height: 528px;
  max-width: 750px;
  min-width: 650px;

  .login-info {
    width: 40%;
    background-color: rgb(40, 116, 240);
    display: inline-block;
    padding: 40px 33px;
    background-image: url("https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png");
    background-position: center 85%;
    background-repeat: no-repeat;

    span {
      color: #fff;
      font-size: 28px;
      font-weight: 500;
    }

    p {
      font-size: 18px;
      margin-top: 16px;
      line-height: 150%;
      color: #dbdbdb;
    }
  }

  .login-input-container {
    position: relative;
    margin-bottom: 34px;

    .floating-label {
      position: absolute;
      left: 0;
      top: 0;
      transform: translateY(10px);
      transition: 0.2s ease all;
      transform-origin: left;
      color: #878787;
      font-weight: 400;
    }

    .login-input {
      z-index: 1;
      position: relative;
      border: 0;
      padding: 8px 10px 10px 0;
      width: 100%;
      background: transparent;
      outline: none;
      border-bottom: 1px solid #e0e0e0;

      &:focus + .floating-label {
        transform: translateY(-10px) scale(0.8);
      }
    }
  }

  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
    padding: 56px 35px 16px;

    .login-policies {
      color: #878787;
      font-size: 12px;
      font-weight: 400;
    }

    button {
      margin-top: 16px;
      border-radius: 2px;
      width: 100%;
      height: 48px;
      font-size: 15px;
      color: #fff;
      background: #fb641b;
      border: 0;
      outline: none;
      font-weight: 500;
      cursor: pointer;
      padding: 10px 20px;
    }

    .create-new-account {
      text-align: center;
      .create-account-link {
        color: #2874f0;
        font-weight: 500;
        text-decoration: none;
      }
    }
  }
`;

export default Styled;
