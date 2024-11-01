import React from 'react';
import gpt3Logo from '../../assets/codely_letters.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to get a spot in the IT industry before others?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <a href = "https://play.google.com/store/apps/details?id=com.codeapp.codely"><p>Download Now</p></a>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Codely - Practice Coding, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <a href = "https://www.instagram.com/codely_app/"><p>Social Media</p></a>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <a href = "https://sites.google.com/view/codely-terms"><p>Terms & Conditions </p></a>
        <a href = "https://sites.google.com/view/codely-privacy-policy"><p>Privacy Policy</p></a>
      </div>
      <div className="gpt3__footer-links_div">
      </div>
    </div>
  </div>
);

export default Footer;