import React from "react";
import iconsearch from "../../assets/image/icon-search.svg";
import searchbtn from "../../assets/image/search-btn.svg";
import iconaccount from "../../assets/image/icon-account.svg";
import cart from "../../assets/image/icon-cart.svg";
const HeaderInner = () => {
  return (
    <div className="header-inner">
      <div className="container-fluid">
        <div className="row container-fluid-header">
          <div className="wrapper-header-nav col-xl-4"></div>
          <div className="wrapper-header-logo col-xl-4 p-lr">
            <div className="wrap-logo text-center">
              <a href="#">
                <img
                  src="https://theme.hstatic.net/1000356051/1000797474/14/logo.png?v=37"
                  alt="PETMALL.VN"
                />
              </a>
            </div>
          </div>
          <div className="wrapper-header-icon col-xl-4 p-lr">
            <div className="header-action-icon">
              <div className="wrap-search header-action">
                <a
                  id="site-search-handle"
                  href=""
                  className="header-action-toggle icon-state"
                >
                  <span className="box-action-icon">
                    <img src={iconsearch} alt="" />
                  </span>
                </a>
                <div className="header_dropdown_content site_search">
                  <div className="site-nav-container">
                    <p className="titlebox-search">Tìm kiếm</p>
                    <div className="wpo-wrapper-search pt-3">
                      <form action="" className="searchform mb-2">
                        <input
                          className="searchinput"
                          placeholder="Tìm kiếm sản phẩm..."
                        ></input>
                        <button
                          id="search-header-btn-dk"
                          className="btn btn-search"
                        >
                          <img src={searchbtn} alt="" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap-account header-action">
                <a
                  href=""
                  id="site-account-handle"
                  className="header-action-toggle icon-state"
                >
                  <span className="box-action-icon">
                    <img src={iconaccount} alt="" />
                  </span>
                </a>
                <div
                  id="account-popover"
                  className="header_dropdown_content site_account"
                >
                  <div className="site-nav-container text-center">
                    <div className="popover-panel_list">
                      <div
                        id="header-login-panel"
                        className="popover-panel popover-panel_default is-selected"
                      >
                        <div className="popover-inner">
                          <form action="" className="customer_login">
                            <div className="popover_header">
                              <h2 className="popover_title">
                                Đăng nhập tài khoản <br></br> Your account
                              </h2>
                              <p className="popover_legend">
                                Theo dõi đơn hàng & khuyến mãi
                              </p>
                            </div>
                            <div className="form-group form-input-wrapper form-input-wrapper_labelled">
                              <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-field_text form-control"
                                required="required"
                              />
                              <label
                                for="email"
                                className="text-field form-floating_label"
                              >
                                Email
                              </label>
                            </div>
                            <div className="form-group form-input-wrapper form-input-wrapper_labelled">
                              <input
                                type="password"
                                id="email"
                                name="email"
                                className="form-field_text form-control"
                                required="required"
                              />
                              <label
                                for="password"
                                className="text-field form-floating_label"
                              >
                                Mật khẩu
                              </label>
                            </div>
                            <div className="sitebox-recaptcha mb-3">
                              This site is protected by reCAPTCHA and the Google
                              <a href="">Privacy Policy</a> and{" "}
                              <a href="">Terms of Service</a>
                              apply.
                            </div>
                            <button
                              type="submit"
                              className="form-submit btn btn-box dark"
                            >
                              Đăng nhập
                            </button>
                          </form>
                          <div className="popover-secondary-action">
                            <p className="mb-2">
                              Khách hàng mới?{" "}
                              <a href="" className="link">
                                Tạo tài khoản
                              </a>
                            </p>
                            <p className="mb-0">
                              Quên mật khẩu?{" "}
                              <button className="link-accented link">
                                Khôi phục mật khẩu
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap-cart header-action">
                <a
                  href=""
                  id="site-cart-handle"
                  className="header-action-toggle icon-state"
                >
                  <span className="box-action-icon">
                    <img src={cart} alt="" />
                    <span className="count-holder">
                      <span className="count">0</span>
                    </span>
                  </span>
                </a>
                <div className="header_dropdown_content site_cart">
                  <div className="site-nav-container">
                    <div className="mini-cart_alert-wrapper">
                      <p className="title-box">Giỏ hàng | Cart</p>
                    </div>
                    <div className="mini-cart_inner">
                      <div className="mini-cart_content">
                        <div className="mini-cart_scroll">
                          <div className="mini-cart_line-item-list">
                            <div className="mini-cart_empty-state">
                              <img
                                src="./assets/image/cart.svg"
                                alt=""
                                height="65px"
                                width="65px"
                              />
                              <p className="m-0">
                                Hiện chưa có sản phẩm
                                <br></br>
                                Your cart is empty
                                <br></br>
                                <br></br>
                                Miễn phí vận chuyển đơn hàng 399k
                                <br></br>
                                Free delivery with order 399k
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mini-cart_total-recap">
                      <div className="mini-cart_price-total-line">
                        <span>TỔNG TIỀN | Subtotal :</span>
                        <span id="total-view-cart">0₫</span>
                      </div>
                      <div className="mini-cart_button-container">
                        <a href="" className="link-to-cart btn-box dark">
                          Xem giỏ hàng
                          <br></br>
                          <br></br>
                          View cart
                        </a>
                        <a href="" className="link-to-checkout btn-box btnred">
                          Thanh toán
                          <br></br>
                          <br></br>
                          Checkout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInner;
