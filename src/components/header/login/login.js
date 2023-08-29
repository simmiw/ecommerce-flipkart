import React from "react";
import Styled from "./styled";

const Login = () => {
  return (
    <Styled>
      <div className="login-info">
        <span>Login</span>
        <p>Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <div className="login-form">
        <div>
          <div className="login-input-container">
            <input className="login-input" />
            <label className="floating-label">Enter Email/Mobile Number</label>
          </div>
          <div className="login-policies">
            By continuing, you agree to Flipkart's Terms of Use and Privacy
            Policy.
          </div>
          <button>Request OTP</button>
        </div>
        <div className="create-new-account">
          <a className="create-account-link">
            New to Flipkart? Create an account
          </a>
        </div>
      </div>
    </Styled>
  );
};

export default Login;
