import React, { useEffect, useState } from "react";
import "../../assets/css/collection.css";

function CollectionHeader(props) {
  return (
    <div class="headerCollectionContainer">
      <div class="headerCollection">
        <ul class="ulCollection">
          <li class="liCollection">
            <a href="#home">Trang chủ | Home</a>
          </li>
          <li class="liCollection">
            <a href="#news">/</a>
          </li>
          <li class="liCollection">
            <a href="#contact">Danh mục</a>
          </li>
          <li class="liCollection">
            <a href="#about">/</a>
          </li>
          <li class="liCollection">
            <a href="#about">
              <b>tất cả các sản phẩm</b>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default CollectionHeader;
