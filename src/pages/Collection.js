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
    value: "Royal Canin",
  },
  {
    id: 2,
    value: "Petsmix",
  },
  {
    id: 3,
    value: "5PLUS",
  },
  {
    id: 4,
    value: "Aatas",
  },
  {
    id: 5,
    value: "JollyCat",
  },
  {
    id: 6,
    value: "ACRO PET",
  },
  {
    id: 7,
    value: "AFP - All for paws",
  },
  {
    id: 8,
    value: "AHT",
  },
  {
    id: 9,
    value: "Alkin",
  },
  {
    id: 10,
    value: "Altimate Pet",
  },
  {
    id: 11,
    value: "American Journey",
  },
  {
    id: 12,
    value: "Gimcat",
  },
  {
    id: 13,
    value: "Royal Canin",
  },
  {
    id: 14,
    value: "Ciao",
  },
  {
    id: 15,
    value: "ABSORB",
  },
  {
    id: 16,
    value: "Aatas",
  },
  {
    id: 17,
    value: "ABOSRB",
  },
  {
    id: 18,
    value: "ABSORB",
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
            <div class="textTittle">
              {params.collecId == "all" ? (
                <p>tất cả sản phẩm</p>
              ) : (
                <p> sản phẩm của {params.collecId}</p>
              )}
            </div>
          </div>
          <div>
            <CollectionProduct item={params.collecId} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Collection;
