import React from 'react';
import img from "../img/IMAGE (1).png"
import str from "../img/IMAGE (2).png"

const Section = () => {
  return (
    <div id='section'>
      <div className="container">
        <div className="section">
          <div className="section-title">
            <div><img src={str} alt="" /></div>
            <span>Meet your host</span>
            <h1>Jacob Paulaner</h1>
            <p>Jacob has a background in audio engineering, and has <br />been podcasting since the early days.</p>
            <p>He’s here to help you level up your game by sharing <br /> everything he’s learned along the way.</p>
          </div>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section;