import React from 'react';

const Subscribe = () => {
  return (
    <div className='container'>
      <div className="subs-title">
       <div className="title">
        <span>Email Newsletter</span>
        <h1>Subscribe <br />for updates</h1>
       </div>
       <div className="inputs">
        <input type="text" placeholder='Name'/>
        <input type="text" placeholder='Email'/>
        <button>Submit</button>
       </div>
      </div>
    </div>
  );
};

export default Subscribe;