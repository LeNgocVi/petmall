import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/contact.js/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Index";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import CartDetail from "./pages/CartDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="mainContent-theme main-index">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
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
