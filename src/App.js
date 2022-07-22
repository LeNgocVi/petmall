import "./App.css";
import Banner from "./components/Banner";
import BlogHome from "./components/BlogHome";
import Contact from "./components/contact.js/Contact";
import Footer from "./components/footer/Footer";
import Index from "./components/header/Index";
import HomeSlide from "./components/HomeSlide";
import HotProduct from "./components/HotProduct";
import Patner from "./components/Patner";
import Promotion from "./components/Promotion";
function App() {
  return (
    <div className="App">
      <Index />
      <main className="mainContent-theme main-index">
        <HomeSlide />
        <Banner />
        <HotProduct />
        <Patner />
        <Promotion />
        <BlogHome />
      </main>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
