
import React from "react";

import Portfolio from "./Portfolio";
import ContactInfo from "./ContactInfo";
import Card from "./Card";
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import  from './componets/Card';
import "../App.css";



function home() {
    return (

  <div className="portfolio-app">
  <Navbar />
  <ContactInfo />
  <div className="wrapper">
    <Carousel />
    <Card className="absolute-card" />
  </div>
  <Portfolio />
  <Footer />
</div>

);
}

export default home;



















