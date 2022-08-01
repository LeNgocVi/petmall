import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/contact.js/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Index";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Collection from "./pages/Collection";
import CartDetail from "./pages/CartDetail";
import Account from "./pages/Account";
import DetailProduct from "./components/detailProduct/DetailProduct";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="mainContent-theme main-index">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Account />} />
          <Route path="/collection/:collecId" element={<Collection />} />
          <Route path="/products/:productId" element={<DetailProduct />} />
          <Route path="/cart" element={<CartDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
