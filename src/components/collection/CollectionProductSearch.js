import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../../firebase-config";

const CollectionProductSearch = ({ item }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    var a = [];
    db.collection("product")
      .get()
      .then((query) => {
        query.forEach((doc) => {
          const data1 = doc.data();
          data1.id = doc.id;
          a.push(data1);
        });
      })
      .then(() => {
        if (item != null) {
          const small_animals = a.filter((element) => {
            return element.name.includes(item);
          });
          console.log(small_animals);
          setData(small_animals);
        }
      });
  }, [item]);
  return (
    <section
      id="section-collection-home"
      className="section section-collection"
    >
      <div className="wrapper-collection-1">
        <div className="row">
          {data.length == 0 ? (
            <p
              style={{
                textAlign: "center",
                fontSize: "30px",
                fontWeight: "700",
                color: "red",
                marginLeft: "15px",
              }}
            >
              chưa có sản phẩm
            </p>
          ) : (
            data.map((note, index) => (
              <div className="col-6 col-md-3 col-lg-3 product-loop" key={index}>
                <Link to={`/products/${note.id}`}>
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
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CollectionProductSearch;
