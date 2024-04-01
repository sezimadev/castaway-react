import React from 'react';
import heroimg from "../img/Frame (1).png"
import heroicon from "../img/Frame.png"


const Hero = () => {
  return (
    <div id='hero'>
      <div className="container">
        <div className="hero">
        <img src={heroimg} alt="" />
          <div className="hero-title">
           <h1>Take your <br /> podcast to the <br /> next <span>level</span></h1>
           <p>Listen on</p>
           <img src={heroicon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;