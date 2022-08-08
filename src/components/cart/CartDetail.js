import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import {
  addCart,
  getCart,
  updateCart,
  deleteCart,
} from "../../app/Slice/cartSlice";
import { auth, db } from "../../firebase-config";

function CartDetail({ cart }) {
  const dispatch = useDispatch();

  async function minusQuantity() {
    if (cart.amount > 1) {
      var a = { ...note, amount: cart.amount - 1 };
      const action = updateCart(a);
      const actionResult = await dispatch(action);
    }
  }

  async function plusQuantity() {
    var a = { ...note, amount: cart.amount + 1 };
    const action = updateCart(a);
    const actionResult = await dispatch(action);
  }

  async function deleteCa(idCart) {
    console.log("xóa");
    const action = deleteCart(idCart);
    const actionResult = await dispatch(action);
  }
  const [note, setNote] = useState({
    amount: cart.amount,
    animal: cart.animal,
    avatar: cart.avatar,
    components_of_production: cart.components_of_production,
    describe: cart.describe,
    id: cart.id,
    idD: cart.idD,
    name: cart.name,
    price: cart.price,
    producer: cart.producer,
    promotion: cart.promotion,
    servicio: cart.servicio,
    type_servicio: cart.type_servicio,
    user_manual: cart.user_manual,
    weight: cart.weight,
  });
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
      }
    });

    return unsub;
  }, []);
  return (
    <div className="list-item-cart">
      <div className="line-item-container">
        <div className="line-item media">
          <div className="line-item-image_wrapper mr-3">
            <a className="d-block">
              <img src={cart.avatar}></img>
            </a>
          </div>
          <div className="line-item-product_body media-body">
            <div className="line-item_title mb-1 pr-4">
              <a className="d-inline-block">
                <h3 className="mb-0 font-weight-bold">{cart.name}</h3>
              </a>
            </div>
            <div className="line-item_vairant mb-2"></div>
            <div className="line-item_price mb-2">
              <span className="price">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(cart.price)}{" "}
              </span>
            </div>
            <div className="line-item_quantity product-quantity qty-click d-inline-block">
              <button
                type="button"
                className="qtyminus qty-btn border float-left"
                onClick={minusQuantity}
              >
                -
              </button>
              <input
                type="text"
                size="4"
                min="1"
                value={cart.amount}
                id="updates_1089040025"
                className="item-quantity float-left text-center border border-right-0 border-left-0"
              ></input>
              <button
                type="button"
                className="qtyplus qty-btn border float-left"
                onClick={plusQuantity}
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
                  <span class="pro-price">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(cart.amount * cart.price)}{" "}
                  </span>
                </span>
              </p>
            </div>
            <a className="line-item_remove-item-cart" title="Xóa sản phẩm này">
              <i
                class="fa-solid fa-trash-can"
                onClick={() => deleteCa(note.idD)}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartDetail;
