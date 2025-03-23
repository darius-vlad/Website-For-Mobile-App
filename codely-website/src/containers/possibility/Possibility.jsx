import React from 'react';
import logo from '../../assets/codely.png'
import './possibility.css';

const Possibility = () => (
  <div className="codely__possibility section__padding" id="possibility">
    <div className="codely__possibility-image">
      <img src={logo} alt="possibility" />
    </div>
    <div className="codely__possibility-content">
     
      <h1 className="gradient__text">Learn anytime, <br /> Learn anywhere</h1>
      <p>Codely is very easy to use and it can help you practice even 5 minutes a day , which is a great start for your learning journey.</p>
    </div>
  </div>
);

export default Possibility;