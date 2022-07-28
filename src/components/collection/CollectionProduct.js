import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase-config";

const CollectionProduct = () => {
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
                      <span className="pro-price">
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(note.price)}{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionProduct;
