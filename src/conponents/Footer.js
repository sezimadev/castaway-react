import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import png from "../img/Frame.png"



const Footer = () => {
  return (
    <div id='footer'>
    <div className="container">
      <div className="footer">
        <div className="logo-icon">
          <h1>Castaway</h1>
          <div className="icons">
            <span><FaInstagram /></span>
            <span><CiTwitter /></span>
            <span><SlSocialFacebook /></span>
          </div>
        </div>
        <div className="home">
          <p>Home</p>
          <p>About</p>
          <p>Episodes</p>
          <p>Contact</p>
        </div>
        <div className="style">
          <p>Style Guide</p>
          <p>Instructions</p>
          <p>Changelog</p>
          <p>Credit</p>
          <p>Powered by Webflow</p>
          <p>Licenses</p>
        </div>
        <img src={png} alt="" />
      </div>
    </div>
      
    </div>
  );
};

export default Footer;