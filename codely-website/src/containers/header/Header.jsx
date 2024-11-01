import React from 'react';
import people from '../../assets/people.png';
import codely from '../../assets/codely.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Practice coding for your interviews and get a job with Codely</h1>
      <p>“Practice isn’t the thing you do once you’re good. It’s the thing you do that makes you good.”</p>
      <div className="gpt3__header-content__input">
        <a href = "https://play.google.com/store/apps/details?id=com.codeapp.codely"><button type="button">Download Now</button></a>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={codely} />
    </div>
  </div>
);

export default Header;