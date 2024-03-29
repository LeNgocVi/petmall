import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import iconsearch from "../../assets/image/icon-search.svg";
import searchbtn from "../../assets/image/search-btn.svg";
import iconaccount from "../../assets/image/icon-account.svg";
import cart from "../../assets/image/icon-cart.svg";
import cart1 from "../../assets/image/cart1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import {
  addCart,
  getCart,
  updateCart,
  deleteCart,
} from "../../app/Slice/cartSlice";

const HeaderInner = () => {
  let navigate = useNavigate();

  const [data, setData] = useState("");

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then((userCredentials) => {
        const user1 = userCredentials.user;
        // console.log("users:", user);
      })
      .catch((error) => alert(error.message));
  };

  const [data1, setData1] = useState([]);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigate(`/`);
        setData1("");
      })
      .catch((error) => alert(error.message));
  };

  const [showSearch, setShowSearch] = useState(false);

  const [valueSearch, setValueSearch] = useState([]);

  let total = 0;
  let totalPrice = 0;
  const dispatch = useDispatch();
  const arrcart = useSelector((state) => state.cart.current);

  arrcart.map((cart, index) => (total = total + cart.amount));

  arrcart.map(
    (cart, index) => (totalPrice = totalPrice + cart.amount * cart.price)
  );

  async function deleteCa(idCart) {
    const action = deleteCart(idCart);
    const actionResult = await dispatch(action);
  }
  async function CheckOut() {
    const currentUser = auth.currentUser;
    arrcart.forEach((element) => {
      const docRef = db
        .collection("user")
        .doc(currentUser.uid)
        .collection("cart")
        .doc(element.idD)
        .delete()
        .then(console.log("xóanhoa", element.idD));
    });
    const action = getCart();
    const actionResult = await dispatch(action);
    alert("bạn đã đặt hàng thành công");
  }

  function Search() {
    navigate(`/collectionSearch/${valueSearch}`);
  }
  const hanldeSearch = () => {
    if (showSearch === false) {
      setShowSearch(true);
      setShowAccount(false);
      setShowCart(false);
    } else {
      setShowSearch(false);
    }
  };
  const [showAccount, setShowAccount] = useState(false);
  const hanldeAccount = () => {
    if (showAccount === false) {
      setShowAccount(true);
      setShowSearch(false);
      setShowCart(false);
    } else {
      setShowAccount(false);
    }
  };

  const [showCart, setShowCart] = useState(false);
  const hanldeCart = () => {
    if (showCart === false) {
      setShowCart(true);
      setShowSearch(false);
      setShowAccount(false);
    } else {
      setShowCart(false);
    }
  };
  useEffect(() => {
    const userCurrent = auth.onAuthStateChanged((user) => {
      if (user) {
        var a = [];
        db.collection("user")
          .doc(user.uid)
          .get()
          .then((doc) => {
            const data2 = doc.data();
            setData1(data2.dataUser);
          });
      }
    });

    return userCurrent;
  }, []);
  return (
    <div className="header-inner">
      <div className="container-fluid">
        <div className="row container-fluid-header">
          <div className="wrapper-header-nav col-xl-4"></div>
          <div className="wrapper-header-logo col-xl-4 p-lr">
            <div className="wrap-logo text-center">
              <Link to="/">
                <img
                  src="https://theme.hstatic.net/1000356051/1000797474/14/logo.png?v=37"
                  alt="PETMALL.VN"
                />
              </Link>
            </div>
          </div>
          <div className="wrapper-header-icon col-xl-4 p-lr">
            <div className="header-action-icon">
              <div className="wrap-search header-action">
                <a
                  onClick={hanldeSearch}
                  id="site-search-handle"
                  className="header-action-toggle icon-state"
                >
                  <span className="box-action-icon">
                    <img src={iconsearch} alt="" />
                  </span>
                </a>
                {showSearch ? (
                  <div className="header_dropdown_content site_search">
                    <div className="site-nav-container">
                      <p className="titlebox-search">Tìm kiếm</p>
                      <div className="wpo-wrapper-search pt-3">
                        <form action="" className="searchform mb-2">
                          <input
                            className="searchinput"
                            placeholder="Tìm kiếm sản phẩm..."
                            onChange={(event) =>
                              setValueSearch(event.target.value)
                            }
                          ></input>
                          <button
                            id="search-header-btn-dk"
                            className="btn btn-search"
                            onClick={Search}
                            type="button"
                          >
                            <img src={searchbtn} alt="" />
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="wrap-account header-action">
                <a
                  onClick={hanldeAccount}
                  id="site-account-handle"
                  className="header-action-toggle icon-state"
                >
                  <span className="box-action-icon">
                    <img src={iconaccount} alt="" />
                  </span>
                </a>
                {showAccount && (
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
                          {data1.length != 0 ? (
                            <div className="popover-inner">
                              <form action="" className="customer_login">
                                <div className="popover_header">
                                  <h2 className="popover_title">
                                    Thông tin <br></br> Tài Khoản
                                  </h2>
                                </div>
                                <div className="form-group form-input-wrapper form-input-wrapper_labelled">
                                  <p>
                                    Họ và tên: {data1.firstName}{" "}
                                    {data1.lastName}
                                  </p>
                                </div>
                                <div className="form-group form-input-wrapper form-input-wrapper_labelled">
                                  <p>Email: {data1.email}</p>
                                </div>
                                <button
                                  type="button"
                                  onClick={handleSignOut}
                                  className="form-submit btn btn-box dark"
                                >
                                  Đăng xuất
                                </button>
                              </form>
                              <div className="popover-secondary-action">
                                <p className="mb-2">
                                  Khách hàng mới?{" "}
                                  <Link to="/signup" className="link">
                                    Tạo tài khoản
                                  </Link>
                                </p>
                                <p className="mb-0">
                                  Quên mật khẩu?{" "}
                                  <button className="link-accented link">
                                    <Link to="/forgot" className="link">
                                      Khôi phục mật khẩu
                                    </Link>
                                  </button>
                                </p>
                              </div>
                            </div>
                          ) : (
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
                                    onChange={(event) =>
                                      setData({
                                        ...data,
                                        email: event.target.value,
                                      })
                                    }
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
                                    id="password"
                                    name="password"
                                    className="form-field_text form-control"
                                    required="required"
                                    onChange={(event) =>
                                      setData({
                                        ...data,
                                        password: event.target.value,
                                      })
                                    }
                                  />
                                  <label
                                    for="password"
                                    className="text-field form-floating_label"
                                  >
                                    Mật khẩu
                                  </label>
                                </div>
                                <div className="sitebox-recaptcha mb-3">
                                  This site is protected by reCAPTCHA and the
                                  Google
                                  <a href="">Privacy Policy</a> and{" "}
                                  <a href="">Terms of Service</a>
                                  apply.
                                </div>
                                <button
                                  type="button"
                                  className="form-submit btn btn-box dark"
                                  onClick={handleLogin}
                                >
                                  Đăng nhập
                                </button>
                              </form>
                              <div className="popover-secondary-action">
                                <p className="mb-2">
                                  Khách hàng mới?{" "}
                                  <Link to="/signup" className="link">
                                    Tạo tài khoản
                                  </Link>
                                </p>
                                <p className="mb-0">
                                  Quên mật khẩu?{" "}
                                  <button className="link-accented link">
                                    <Link to="/forgot" className="link">
                                      Khôi phục mật khẩu
                                    </Link>
                                  </button>
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="wrap-cart header-action">
                <a
                  onClick={hanldeCart}
                  id="site-cart-handle"
                  className="header-action-toggle icon-state"
                >
                  <span className="box-action-icon">
                    <img src={cart} alt="" />
                    <span className="count-holder">
                      <span className="count">{total}</span>
                    </span>
                  </span>
                </a>
                {showCart && (
                  <div className="header_dropdown_content site_cart">
                    <div className="site-nav-container">
                      <div className="mini-cart_alert-wrapper">
                        <p className="title-box">Giỏ hàng | Cart</p>
                      </div>

                      {arrcart.length == 0 ? (
                        <div className="mini-cart_inner">
                          <div className="mini-cart_content">
                            <div className="mini-cart_scroll">
                              <div className="mini-cart_line-item-list">
                                <div className="mini-cart_empty-state">
                                  <img
                                    src={cart1}
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
                      ) : (
                        arrcart.map((cart, index) => (
                          <div className="mini-cart_inner" key={index}>
                            <div className="mini-cart_content">
                              <div className="mini-cart_scroll">
                                <div
                                  id="cart-view"
                                  className="mini-cart_line-item-list"
                                >
                                  <div className="mini-cart_line-item">
                                    <div className="mini-cart_image-wrapper">
                                      <a className="d-block">
                                        <img src={cart.avatar}></img>
                                      </a>
                                    </div>
                                    <div className="mini-cart_item-wrapper">
                                      <a className="mini-cart_product-title link">
                                        {cart.name}
                                      </a>
                                      <span className="mini-cart_product-variant"></span>
                                      <span className="mini-cart_product-quantity">
                                        {cart.amount}
                                      </span>
                                      <span className="mini-cart_product-price">
                                        {new Intl.NumberFormat("vi-VN", {
                                          style: "currency",
                                          currency: "VND",
                                        }).format(cart.price)}{" "}
                                      </span>
                                      <span className="mini-cart_product-remove-item">
                                        <a className="d-block">
                                          <i
                                            class="fa-solid fa-xmark"
                                            onClick={() => deleteCa(cart.idD)}
                                          ></i>
                                        </a>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                      <div className="mini-cart_total-recap">
                        <div className="mini-cart_price-total-line">
                          <span>TỔNG TIỀN | Subtotal :</span>

                          <span id="total-view-cart">
                            {new Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            }).format(totalPrice)}{" "}
                          </span>
                        </div>
                        <div className="mini-cart_button-container">
                          <Link
                            to="/cart"
                            className="link-to-cart btn-box dark"
                          >
                            Xem giỏ hàng
                            <br></br>
                            <br></br>
                            View cart
                          </Link>
                          <div
                            className="link-to-checkout btn-box btnred"
                            onClick={CheckOut}
                          >
                            Thanh toán
                            <br></br>
                            <br></br>
                            Checkout
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInner;
