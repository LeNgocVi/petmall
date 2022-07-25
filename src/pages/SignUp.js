import React from "react";

const SignUp = () => {
  return (
    <div className="layout-account my-5">
      <div className="">
        <div className="wrapbox-content-account pb-4">
          <div className="customers-account-form userbox m-auto">
            <div className="customers-register">
              <div className="account-type text-center">
                <h1>Tạo tài khoản</h1>
              </div>
              <form id="create_customer">
                <div className="form-group mb-4 clearfix">
                  <label
                    for="last_name"
                    className="text-field d-block font-weight-normal text-uppercase mb-2"
                  >
                    Họ
                  </label>
                  <input
                    id="last_name"
                    type="text"
                    placeholder="Họ"
                    className="form-control"
                  ></input>
                </div>
                <div className="form-group mb-4 clearfix">
                  <label
                    for="first_name"
                    className="text-field d-block font-weight-normal text-uppercase mb-2"
                  >
                    Tên
                  </label>
                  <input
                    id="first_name"
                    type="text"
                    placeholder="Tên"
                    className="form-control"
                  ></input>
                </div>
                <div id="grender-group" className="form-group mb-4 clearfix">
                  <label
                    for="grender"
                    className="text-field d-block font-weight-normal text-uppercase mb-2"
                  >
                    Giới tính
                  </label>
                  <input id="radio1" type="radio"></input>
                  <label for="radio1">Nam</label>
                  <input id="radio2" type="radio"></input>
                  <label for="radio2">Nữ</label>
                </div>
                <div className="form-group mb-4 clearfix">
                  <label
                    for="birthday"
                    className="text-field d-block font-weight-normal text-uppercase mb-2"
                  >
                    Ngày tháng năm sinh (mm/dd/yyyy)
                  </label>
                  <input
                    id="birthday"
                    type="text"
                    placeholder="mm/dd/yyyy"
                    className="form-control"
                  ></input>
                </div>
                <div className="form-group mb-4 clearfix">
                  <label
                    for="eamil"
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
                    for="password"
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
                <div className="customers-action-account clearfix">
                  <div className="action-button">
                    <button className="btn btn-box dark">Đăng ký</button>
                  </div>
                </div>
                <div className="clearfix req_pass mt-5">
                  <a className="come-back d-block font-weight-bold">
                    <i class="fa-solid fa-arrow-left mr-4"></i>
                    Quay lại đăng nhập
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
