import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div id="login" className="customers-account">
      <div className="account-type text-center">
        <h1>Đăng nhập</h1>
      </div>
      <form id="create_customer">
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
        <div className="form-group mb-4 clearfix">
          <label
            htmlFor="password"
            className="text-field d-block font-weight-normal text-uppercase mb-2"
          >
            Mật khẩu
          </label>
          <input
            id="password"
            type="password"
            placeholder="Mật khẩu"
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
              Đăng nhập
            </button>
          </div>
          <div className="register--password mt-3">
            <p className="mb-2">
              Quên mật khẩu? <Link to="/forgot">Khôi phục mật khẩu</Link>
            </p>
            <p className="mb-0">
              Khách hàng mới? <Link to="/signup">Tạo tài khoản của bạn</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
