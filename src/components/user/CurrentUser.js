import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase-config";

const CurrentUser = () => {
  const [data, setData] = useState([]);
  // console.log("datassss", data.dataUser.firstName);
  useEffect(() => {
    const userCurrent = auth.onAuthStateChanged((user) => {
      // console.log("ssssssss", user);
      if (user) {
        var a = [];
        db.collection("user")
          .doc(user.uid)
          .get()
          .then((doc) => {
            const data1 = doc.data();
            setData(data1.dataUser);
          });
      }
    });

    return userCurrent;
  }, []);
  return (
    <>
      <div className="customer-sidebar clearfix">
        <h2 className="title-detail mb-2 pb-2 text-uppercase">
          Thông tin tài khoản
        </h2>
        <div className="box-info-sidebar">
          <div className="name-account mb-2">
            <span className="font-weight-bold mr-2">Họ tên: </span>
            {data.firstName} {data.lastName}
          </div>
          <div className="email mb-2">
            <span className="font-weight-bold mr-2">Email: </span> {data.email}
          </div>
          <div className="address">
            <p className="mb-2">
              <span className="font-weight-bold mr-2"> Địa chỉ 1: </span>
            </p>
            <p className="mb-2">
              <span className="font-weight-bold mr-2">Địa chỉ 2: </span>
            </p>
            <p className="mb-2">
              <span className="font-weight-bold mr-2">Quốc gia: </span> VietNam
            </p>
            <p className="mb-2">
              <span className="font-weight-bold mr-2">Số điện thoại: </span>
            </p>
            <a id="view_address">Xem địa chỉ</a>
          </div>
        </div>
      </div>
      <div className="customer-orders mb-4">
        <div className="wrap-order-table p-2 mt-4 mb-3">
          <div id="customer_orders" className="customers-order-bg p-2">
            <p className="mt-2">Bạn chưa đặt mua sản phẩm.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentUser;
