import React from 'react';
import farme from "../img/Frame (3).png"

const Main2 = () => {
  return (
    <div id='main'>
      <div className="container">
        <div className="main">
          <div className="kard">
            <img src={farme} alt="" />
            <div className="main-title">
              <h5>Gear</h5>
               <p>Episode 1</p>
               <h2>The best microphone <br /> under $200</h2>
               <span>With so many microphones on the market, how are you supposed to know <br />what’s the best? Take a look at our top picks.</span>
               <button>View Episode Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main2;