import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import BlogHome from "../components/BlogHome";
import HomeSlide from "../components/HomeSlide";
import HotProduct from "../components/HotProduct";
import Patner from "../components/Patner";
import Promotion from "../components/Promotion";
import { auth, db } from "../firebase-config";
const Home = () => {
  useEffect(() => {
    const userCurrent = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user.uid);
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
