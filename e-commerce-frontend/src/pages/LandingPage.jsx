/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import CarouselContainer from "../components/CarouselContainer";
import DumiProducts from "../components/DumiProducts";
import FooterComponent from "../components/FooterComponent";
import { CartContext } from "../App";

const LandingPage = () => {
  const handleGreeting = () => {
    let txt = "Welcome to Alpha Mart";
    let wSpeech = window.speechSynthesis;
    let voice = new SpeechSynthesisUtterance(txt);
    wSpeech.speak(voice);
    voice.rate=0.1;
  };

  const {items}=useContext(CartContext)

  return (
    <div>
      <button id="greeting-btn" onClick={handleGreeting}> Click to Announce Greeting</button>
      <button id="cart-btn" >Cart {items.length}</button>
      <CarouselContainer />
      <h1>Products</h1>
      <DumiProducts />
      <FooterComponent />
    </div>
  );
};

export default LandingPage;