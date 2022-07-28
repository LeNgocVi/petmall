import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";

const Promotion = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    var a = [];
    db.collection("product")
      .where("promotion", "==", "yes")
      .limit(8)
      .get()
      .then((query) => {
        query.forEach((doc) => {
          const data1 = doc.data();
          console.log(doc.data());
          data1.id = doc.id;
          a.push(data1);
        });
      })
      .then(() => {
        setData(a);
      });
  }, []);
  return (
    <section
      id="section-collection-two"
      className="section section-collection-two"
    >
      <div className="container-fluid">
        <div className="wrapper-heading-home text-center">
          <h2>
            <a href="" className="title link">
              Khuyễn mãi | Promotion
            </a>
          </h2>
          <p className="description">Giá yêu - Deal hời</p>
        </div>
        <div className="wrapper-collection-2 d-flex">
          <div id="collection-two-slide" className="row owl-carousel">
            {data.map((note, index) => (
              <div
                className="col-12 col-lg-3 product-colmnloop d-flex-cs"
                key={index}
              >
                <div className="col-12 product-loop product-horizontal">
                  <div className="product-inner product-resize d-flex fixheight">
                    <div className="product-image">
                      <a href="">
                        <img
                          className="aspect-ratio"
                          src={note.avatar}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-detail">
                      <div className="box-pro-detail">
                        <h3 className="pro-name">
                          <a className="link" href="">
                            {note.name}
                          </a>
                        </h3>
                        <div className="box-pro-prices">
                          <p className="block-pro-price">
                            <span className="pro-price">
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(note.price)}{" "}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
