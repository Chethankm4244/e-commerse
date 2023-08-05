import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Slider from "./components/slider/Slider";
import Virtual from "./components/virtual/Virtual";
import Product from "./components/products/Product";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider/>
      <Virtual/>
      <Product />
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
