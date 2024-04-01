import React from 'react';

const Header = () => {
  return (
    <div id='header'>
      <div className="container">
        <div className="header">
             <h1>Castaway</h1>
             <div className="header-nav">
              <a>Home</a>
              <a>Episodes</a>
              <a>About</a>
              <a>Contact</a>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Header;