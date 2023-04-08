import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarcomp from "../companents/Navbarcomp";
import Social from "../companents/Social";
import "../App.css";
import Slider from "../companents/Slider";
import SliderDown from "../companents/SliderDown";

function Anasayfa() {
  return (
    <div className="App">
      <div>
        <Social />
      </div>
      <div>
        <Navbarcomp />
      </div>
      <div>
        <Slider />
      </div>
      <div>
        <SliderDown />
      </div>
    </div>
  );
}

export default Anasayfa;
