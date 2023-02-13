import React from "react";
import Header from "./Containers/Header";
import Slider from "./Containers/Slider";
import Categorys from "./Containers/Categorys";
import Flashsale from "./Containers/Flashsale";
import Images from "./Containers/Images";
import ShoppeeMall from "./Containers/ShoppeeMall";
import Topsearch from "./Containers/Topsearch";
import Container from "./Containers/Container";
import News from "./Containers/News";
import Footer from "./Containers/Footer";
import Footers from "./Containers/Footers";
import Footerss from "./Containers/Footerss";
import Category from "./Containers/Category";
import "./App.css"
import "./grid.css";
function App() {
  return (
    <>
      <Header/>
      <Slider/>
      <Categorys/>
      <Flashsale/>
      <Images/>
      <ShoppeeMall/>
      <Topsearch/>
      <Container/>
      <News/>
      <Category/>
      <Footer/>
      <Footers/>
      <Footerss/>
    </>
  );
}

export default App;
