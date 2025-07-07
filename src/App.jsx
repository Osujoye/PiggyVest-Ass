import React from "react";
import Header from "./Static/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./Static/Footer";
import PiggyBank from "./pages/PiggyBank";
import Invest from "./pages/Invest";
import Save from "./pages/Save";
import SignIn from "./pages/SignIn";
import Stories from "./pages/Stories";
import { LuChevronDown } from "react-icons/lu";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Resource from "./pages/Resource";
import Blog from "./pages/Blog";
import BuyNow from "./pages/BuyNow";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/piggybank" element={<PiggyBank />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/save" element={<Save />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/LuChevronDown" element={<LuChevronDown />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/resource/blog.piggy.com" element={<Blog />} />
          <Route path="/buyNow" element={<BuyNow />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
