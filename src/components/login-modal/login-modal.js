import React from "react";
import LoginModalStyled from "./styled";

const LoginModal = ({ dropdown }) => {
  return (
    <>
      {dropdown ? (
        <LoginModalStyled>
          <div className="login-info">
            <span>Login</span>
            <p>Get access to your Orders, Wishlist and Recommendations</p>
          </div>
          <div className="login-container">
            <input
              className="login-input"
              placeholder="Enter Email/Mobile Number"
            ></input>
            <div>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </div>
            <button>Request OTP</button>

            <span>New to Flipkart? Create an account</span>
          </div>
        </LoginModalStyled>
      ) : null}
    </>
  );
};

export default LoginModal;
