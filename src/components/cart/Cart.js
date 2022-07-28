import React from "react";

const Cart = () => {
  return (
    <div className="layoutPage-cart mt-4 pb-5">
      <div className="container-fluid">
        <div className="wrapper-cart-layout">
          <div className="heading-page-cart text-center pt-3 pb-4">
            <h1 className="m-0">
              Giỏ hàng của bạn <br></br>Your shopping cart{" "}
            </h1>
          </div>
          <div className="wrapbox-content-cart">
            <div className="cart-container-inner">
              <div className="row">
                <div className="col-12 col-md-8">
                  <form id="cartformpage">
                    <div className="reponsive-table-cart">
                      <div className="title-count-cart mb-2">
                        Bạn đang có
                        <span className="font-weight-bold"> 2 sản phẩm </span>
                        trong giỏ hàng
                        <br></br>
                        You have
                        <span className="font-weight-bold"> 2 product </span>
                        in your shopping cart
                      </div>
                      <div className="table-cart">
                        <div className="list-item-cart">
                          <div className="line-item-container">
                            <div className="line-item media">
                              <div className="line-item-image_wrapper mr-3">
                                <a className="d-block">
                                  <img src="https://product.hstatic.net/1000356051/product/1_6b67e4cc257747d1a034b3baddc0acab_compact.png"></img>
                                </a>
                              </div>
                              <div className="line-item-product_body media-body">
                                <div className="line-item_title mb-1 pr-4">
                                  <a className="d-inline-block">
                                    <h3 className="mb-0 font-weight-bold">
                                      Đồ chơi ROGZ by Kong Grinz Treat Ball
                                      Small Size - Hỗ trợ vận động, có thể nhét
                                      treats Petmall{" "}
                                    </h3>
                                  </a>
                                </div>
                                <div className="line-item_vairant mb-2"></div>
                                <div className="line-item_price mb-2">
                                  <span className="price">
                                    <strong>211,000₫</strong>
                                  </span>
                                </div>
                                <div className="line-item_quantity product-quantity qty-click d-inline-block">
                                  <button
                                    type="button"
                                    className="qtyminus qty-btn border float-left"
                                  >
                                    -
                                  </button>
                                  <input
                                    type="text"
                                    size="4"
                                    min="1"
                                    value="1"
                                    id="updates_1089040025"
                                    className="item-quantity float-left text-center border border-right-0 border-left-0"
                                  ></input>
                                  <button
                                    type="button"
                                    className="qtyplus qty-btn border float-left"
                                  >
                                    +
                                  </button>
                                </div>
                                <div className="line-item_price-total float-md-right mt-2 mt-md-0">
                                  <p className="m-0">
                                    <span className="text font-weight-normal">
                                      Thành tiền | Subtotal :
                                    </span>
                                    <span className="line-item-total font-weight-bold">
                                      211,000₫
                                    </span>
                                  </p>
                                </div>
                                <a
                                  className="line-item_remove-item-cart"
                                  title="Xóa sản phẩm này"
                                >
                                  <i class="fa-solid fa-trash-can"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="list-item-cart">
                          <div className="line-item-container">
                            <div className="line-item media">
                              <div className="line-item-image_wrapper mr-3">
                                <a className="d-block">
                                  <img src="https://product.hstatic.net/1000356051/product/1_6b67e4cc257747d1a034b3baddc0acab_compact.png"></img>
                                </a>
                              </div>
                              <div className="line-item-product_body media-body">
                                <div className="line-item_title mb-1 pr-4">
                                  <a className="d-inline-block">
                                    <h3 className="mb-0 font-weight-bold">
                                      Đồ chơi ROGZ by Kong Grinz Treat Ball
                                      Small Size - Hỗ trợ vận động, có thể nhét
                                      treats Petmall{" "}
                                    </h3>
                                  </a>
                                </div>
                                <div className="line-item_vairant mb-2"></div>
                                <div className="line-item_price mb-2">
                                  <span className="price">
                                    <strong>211,000₫</strong>
                                  </span>
                                </div>
                                <div className="line-item_quantity product-quantity qty-click d-inline-block">
                                  <button
                                    type="button"
                                    className="qtyminus qty-btn border float-left"
                                  >
                                    -
                                  </button>
                                  <input
                                    type="text"
                                    size="4"
                                    min="1"
                                    value="1"
                                    id="updates_1089040025"
                                    className="item-quantity float-left text-center border border-right-0 border-left-0"
                                  ></input>
                                  <button
                                    type="button"
                                    className="qtyplus qty-btn border float-left"
                                  >
                                    +
                                  </button>
                                </div>
                                <div className="line-item_price-total float-md-right mt-2 mt-md-0">
                                  <p className="m-0">
                                    <span className="text font-weight-normal">
                                      Thành tiền | Subtotal :
                                    </span>
                                    <span className="line-item-total font-weight-bold">
                                      211,000₫
                                    </span>
                                  </p>
                                </div>
                                <a
                                  className="line-item_remove-item-cart"
                                  title="Xóa sản phẩm này"
                                >
                                  <i class="fa-solid fa-trash-can"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="reponsive-cart-noted mt-4">
                      <div className="row">
                        <div className="col-12 col-lg-6">
                          <div className="checkout-note clearfix"></div>
                          <div className="check_out_btn d-none">
                            <label for="note" className="note-label d-block">
                              Ghi chú đơn hàng <br></br> Order notes
                            </label>
                            <textarea
                              id="note"
                              name="note"
                              rows="6"
                              className="form-control"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-12 col-lg-6 d-none d-md-block">
                          <div className="policy_return mt-3 mt-lg-0">
                            <h2 className="mb-2">Chính sách mua hàng</h2>
                            <ul className="list-group">
                              <li className="d-block pl-3">
                                Sản phẩm được đổi 1 lần duy nhất, không hỗ trợ
                                trả.
                              </li>
                              <li className="d-block pl-3">
                                Sản phẩm còn đủ tem mác, chưa qua sử dụng
                              </li>
                              <li className="d-block pl-3">
                                Sản phẩm nguyên giá được đổi trong 30 ngày trên
                                toàn hệ thống
                              </li>
                              <li className="d-block pl-3">
                                Sản phẩm sale chỉ hỗ trợ đổi size (nếu cửa hàng
                                còn) trong 7 ngày trên toàn hệ thống
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-12 col-md-4">
                  <div className="wrap-order-summary sticky-cart-order mt-4 mt-md-0">
                    <div className="order-cart-block p-3 border">
                      <h2 className="order-title mb-3">
                        Thông tin đơn hàng <br></br>
                      </h2>
                      <div className="order-total mb-2 font-weight-bold">
                        <p className="m-0 py-3 border-bottom border-top">
                          Tổng tiền | Subtotal :
                          <span className="font-weight-bold">522,000₫</span>
                        </p>
                      </div>
                      <div className="order-short-description">
                        <p className="mb-2">
                          Bạn có thể nhập mã giảm giá ở trang thanh toán
                          <br></br>
                          You can enter the coupon code at the checkout page
                        </p>
                      </div>
                      <div className="order-action-checkout">
                        <a className="checkout-btn d-block text-center text-white text-uppercase link">
                          Thanh toán | Checkout
                        </a>
                      </div>
                      <a
                        className="countine_order_cart d-block text-center mt-2 link"
                        title="Tiếp tục mua hàng"
                      >
                        <i class="fa-solid fa-reply"></i>Tiếp tục mua hàng
                      </a>
                    </div>
                  </div>
                  <div className="wrap-policy-cart d-block d-md-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
