import React, { useState } from "react";
import CollectionHeader from "../collection/CollectionHeader";
import Description from "./Description";
import ReturnPolicy from "./ReturnPolicy";
import PrivacyPolicy from "./PrivacyPolicy";
import Custumer from "./Custumer";

function DetailProduct() {
  return (
    <div>
      <CollectionHeader />
      <div class="detailContainer">
        <div class="detailContainerLeft">
          <img
            src="https://product.hstatic.net/1000356051/product/1_01aa049c55d74a6a86b4710b16531770_master.png"
            style={{ marginBottom: "40px" }}
          />{" "}
          <Description />
          <ReturnPolicy />
          <PrivacyPolicy />
        </div>
        <div class="detailContainerRight">
          <div class="detailContainerRightHeader">
            <div class="product-container-detail stickyProduct-detail">
              <div class="product-content-summary2">
                <div class="product-heading mb-3">
                  <h1>
                    Gel dinh dưỡng GimCat Relax Paste (Anti-stress) 50g - Giảm
                    căng thẳng Petmall 2022
                  </h1>

                  <span class="pro-soldold"></span>
                  <span id="pro_vandor">
                    <strong>BY:</strong>{" "}
                    <a title="Show vendor" href="/collections/vendors?q=gimcat">
                      Gimcat
                    </a>
                  </span>
                </div>
                <div
                  id="price-preview"
                  class="product-price d-flex align-items-center py-3 mb-3"
                >
                  <span class="pro-price">192,000₫</span>
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
                          // onclick="minusQuantity()"
                          class="qty-btn"
                        />
                        <input
                          type="text"
                          id="quantity"
                          name="quantity"
                          value="1"
                          min="1"
                          class="quantity-selector-input"
                          aria-label="Quantity input"
                        />
                        <input
                          type="button"
                          value="+"
                          // onclick="plusQuantity()"
                          class="qty-btn"
                        />
                      </div>
                      <div class="wrap-addcart">
                        <button
                          type="button"
                          id="add-to-cart"
                          class=" add-to-cartProduct btn-box btnred add-toCart"
                          name="add"
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
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
