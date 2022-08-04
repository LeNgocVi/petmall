import React, { useState, useEffect } from "react";
import CollectionHeader from "../collection/CollectionHeader";
import Description from "./Description";
import ReturnPolicy from "./ReturnPolicy";
import PrivacyPolicy from "./PrivacyPolicy";
import { addCart } from "../../app/Slice/cartSlice";
import Custumer from "./Custumer";
import { Routes, Route, useParams } from "react-router-dom";
import { auth, db } from "../../firebase-config";

import { useDispatch } from "react-redux";

function DetailProduct() {
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  let params = useParams();

  function minusQuantity() {
    if (data.amount > 0) {
      setData({ ...data, amount: data.amount - 1 });
    }
  }

  async function addCarts() {
    if (data != "") {
      const action = addCart(data);
      const actionResult = await dispatch(action);
    } else {
      alert("fields cannot be left blank");
    }
  }

  function plusQuantity() {
    setData({ ...data, amount: data.amount + 1 });
  }
  useEffect(() => {
    if (params.productId) {
      var a = [];
      db.collection("product")
        .doc(params.productId)
        .get()
        .then((doc) => {
          const data1 = doc.data();
          data1.amount = 1;
          setData(data1);
        });
    }
  }, []);
  return (
    <div>
      <CollectionHeader />
      <div class="detailContainer">
        <div class="detailContainerLeft">
          <img src={data.avatar} style={{ marginBottom: "40px" }} />{" "}
          <Description />
          <ReturnPolicy />
          <PrivacyPolicy />
        </div>
        <div class="detailContainerRight">
          <div class="detailContainerRightHeader">
            <div class="product-container-detail stickyProduct-detail">
              <div class="product-content-summary2">
                <div class="product-heading mb-3">
                  <h1>{data.name}</h1>

                  <span class="pro-soldold"></span>
                  <span id="pro_vandor">
                    <strong>BY:</strong>{" "}
                    <a title="Show vendor" href="/collections/vendors?q=gimcat">
                      {data.producer}
                    </a>
                  </span>
                </div>
                <div
                  id="price-preview"
                  class="product-price d-flex align-items-center py-3 mb-3"
                >
                  <span class="pro-price">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(data.price)}{" "}
                  </span>
                </div>
                <div class="product-variants mb-md-3">
                  <form
                    id="add-item-form"
                    action="/cart/add"
                    method="post"
                    class="variants clearfix"
                  >
                    <div
                      class="select clearfix d-none"
                      style={{ display: "none" }}
                    >
                      <select
                        id="product-select"
                        name="id"
                        style={{ display: "none" }}
                      >
                        <option value="1088742140">
                          Default Title - 192,000₫
                        </option>
                      </select>
                    </div>
                    <div
                      class="select-swatch clearfix"
                      style={{ display: "none" }}
                    ></div>
                    <div class="selector-actions selector-actions_bottom-mb">
                      <div class="quantity-area">
                        <input
                          type="button"
                          value="-"
                          onClick={minusQuantity}
                          class="qty-btn"
                        />
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          value={data.amount}
                          min="1"
                          class="quantity-selector-input"
                          aria-label="Quantity input"
                        />
                        <input
                          type="button"
                          value="+"
                          onClick={plusQuantity}
                          class="qty-btn"
                        />
                      </div>
                      <div class="wrap-addcart">
                        <button
                          type="button"
                          id="add-to-cart"
                          class=" add-to-cartProduct btn-box btnred add-toCart"
                          name="add"
                          onClick={addCarts}
                        >
                          Thêm vào giỏ{" "}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="product-available mb-3">
                  <p class="txt-inventory"></p>
                </div>
                <div class="product-service mb-3">
                  <ul class="infoList-service">
                    <li>
                      <span>
                        <img
                          src="//theme.hstatic.net/1000356051/1000797474/14/product_deliverly_1_icons.png?v=37"
                          alt="Cam kết 100% chính hãng"
                        />
                      </span>
                      Cam kết 100% chính hãng
                    </li>
                    <li>
                      <span>
                        <img src="https://theme.hstatic.net/1000356051/1000797474/14/product_deliverly_2_icons.png?v=37" />
                      </span>
                      Miễn phí vận chuyển
                      <br />
                      Trong 60 phút tại Hồ Chí Minh với đơn hàng &gt;599k
                      <br />
                      Giao hàng toàn quốc từ 1-2 ngày
                    </li>
                    <li>
                      <span>
                        <img
                          src="//theme.hstatic.net/1000356051/1000797474/14/product_deliverly_3_icons.png?v=37"
                          alt="Đổi sản phẩm nhanh trong 24h"
                        />
                      </span>
                      Đổi sản phẩm nhanh trong 24h
                    </li>
                  </ul>
                </div>
                <Custumer />
                {/* <div class="product-description  d-none d-sm-block">
                  <div class="product-tab">
                    <div class="product-tab-title">
                      <h2>CUSTUMER REVIEWS</h2>
                    </div>
                  </div>
                </div> */}
              </div>
              {/* ))} */}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
