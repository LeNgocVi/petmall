import React from "react";
import Banner from "../components/Banner";
import BlogHome from "../components/BlogHome";
import HomeSlide from "../components/HomeSlide";
import HotProduct from "../components/HotProduct";
import Patner from "../components/Patner";
import Promotion from "../components/Promotion";
const Home = () => {
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
