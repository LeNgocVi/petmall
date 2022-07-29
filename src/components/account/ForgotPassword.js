import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div id="recover-password">
      <div className="account-type text-center">
        <h2>Phục hồi mật khẩu</h2>
      </div>
      <form>
        <div className="form-group mb-4 clearfix">
          <label
            htmlFor="email"
            className="text-field d-block font-weight-normal text-uppercase mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="form-control"
          ></input>
        </div>
        <div className="sitebox-recaptcha mb-4">
          This site is protected by reCAPTCHA and the Google
          <a> Privacy Policy</a> and <a> Terms of Service</a> apply.
        </div>
        <div className="customers-action-account text-center">
          <div className="action-button">
            <button type="buttton" className="btn btn-box dark">
              Gửi
            </button>
          </div>
          <div className="register--password mt-3">
            <p className="mb-2">
              Bạn đã nhớ mật khẩu <Link to="/signin">Quay lại đăng nhập</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
