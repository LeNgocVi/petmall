import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";

const HotProduct = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    var a = [];
    db.collection("product")
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
      id="section-collection-home"
      className="section section-collection"
    >
      <div className="container-fluid">
        <div className="wrapper-heading-home text-center">
          <h2>
            <a href="" className="title link">
              Hot Products
            </a>
          </h2>
          <p className="description">
            Giao hàng nhanh trong 60 phút tại Hồ Chí Minh
          </p>
        </div>
        <div className="wrapper-collection-1">
          <div className="row">
            {data.map((note, index) => (
              <div className="col-6 col-md-3 col-lg-3 product-loop" key={index}>
                <div className="product-inner">
                  <div className="product-image">
                    <a href="" className="aspect-ratio">
                      <img src={note.avatar} alt="" />
                    </a>
                  </div>
                  <div className="product-detail">
                    <div className="box-pro-detail">
                      <h3 className="pro-name">
                        <a href="" className="link">
                          {note.name}
                        </a>
                      </h3>
                      <div className="box-pro-prices">
                        <span className="pro-price"> {note.price}</span>
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

export default HotProduct;
