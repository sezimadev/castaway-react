import React from 'react';
import images from "../img/IMAGE.png"

const Main = () => {
  return (
    <div id='main'>
      <div className="container">
        <div className="main">
   <div className="main-text">
   <h1>Latest episodes</h1>
        <button>View all episodes</button>
   </div>
          <div className="kard">
            <img src={images} alt="" />
            <div className="main-title">
              <h5>Gear</h5>
               <p>Episode 3</p>
               <h2>Should you get <br /> outboard audio gear?</h2>
               <span>Is hardware really worth it when it comes to podcasting? The answer is...it <br />depends. Here’s our reasons on why you might want to consider picking <br /> something up.</span>
               <button>View Episode Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;