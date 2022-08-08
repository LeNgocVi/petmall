import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import BlogHome from "../components/BlogHome";
import HomeSlide from "../components/HomeSlide";
import HotProduct from "../components/HotProduct";
import Patner from "../components/Patner";
import Promotion from "../components/Promotion";
import { auth, db } from "../firebase-config";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../app/Slice/cartSlice";
import { unwrapResult } from "@reduxjs/toolkit";
const Home = () => {
  const dispatch = useDispatch();
  // const arrcart = useSelector((state) => state.cart.current);
  async function getCarts() {
    console.log("ok ko");
    const action = getCart();
    const actionResult = await dispatch(action);
    const currentUser = unwrapResult(actionResult);
  }

  useEffect(() => {
    const userCurrent = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user.uid);
        getCarts();
      }
    });
  }, []);
  return (
    <>
      <HomeSlide />
      <Banner />
      <HotProduct />
      <Patner />
      <Promotion />
      <BlogHome />
    </>
  );
};

export default Home;
