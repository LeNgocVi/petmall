import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import CollectionSlide from "../components/collection/CollectionSlide";
import CollectionHeader from "../components/collection/CollectionHeader";
import "../assets/css/collection.css";
import DropdownBrand from "../components/collection/DropdownBrand";
import DropdownPrice from "../components/collection/DropdownPrice";
import CollectionProduct from "../components/collection/CollectionProduct";

const items = [
  {
    id: 1,
    value: "Pulp Fiction",
  },
  {
    id: 2,
    value: "The Prestige",
  },
  {
    id: 3,
    value: "Blade Runner 2049",
  },
];
const itemPrice = [
  {
    id: 1,
    value: "Dưới 1.000.000₫",
  },
  {
    id: 2,
    value: "1.000.000₫ - 2.000.000₫",
  },
  {
    id: 3,
    value: "2.000.000₫ - 3.000.000₫",
  },
  {
    id: 5,
    value: "3.000.000₫ - 4.000.000₫",
  },
  {
    id: 5,
    value: "Trên 5.000.000₫",
  },
];

const Collection = () => {
  let params = useParams();
  return (
    <div>
      <CollectionHeader />
      <CollectionSlide />
      <div class="collectionContainer">
        <div class="collectionContainerLeft">
          {" "}
          <DropdownBrand title="Select movie" items={items} multiSelect />
          <DropdownPrice title="Select movie" items={itemPrice} multiSelect />
        </div>
        <div class="collectionContainerRight">
          <div class="collectionContainerRightHeader">
            <div class="textTittle">Tất cả sản phẩm</div>
          </div>
          <div>
            <CollectionProduct />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Collection;
