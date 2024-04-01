import React from 'react';
import farm from "../img/Frame (2).png"
const Main1 = () => {
  return (
    <div id='main'>
      <div className="container">
        <div className="main">
          <div className="kard">
            <img src={farm} alt="" />
            <div className="main-title">
              <h5>Tips & Tricks</h5>
               <p>Episode 2</p>
               <h2>Mic tricks to take <br /> you to the next level</h2>
               <span>Stop rolling with those default settings on your mic. These small tweaks will <br /> take you from sounding good to great.</span>
               <button>View Episode Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main1;