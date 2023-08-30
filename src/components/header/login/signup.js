import React from "react";

const Signup = () => {
  return (
    <div>
      <div className="login-details">
        <span>Looks like you're new here?</span>
        <p>Sign up with your mobile number to get started</p>
      </div>

      <div className="login-form">
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
    </div>
  );
};

export default Signup;
