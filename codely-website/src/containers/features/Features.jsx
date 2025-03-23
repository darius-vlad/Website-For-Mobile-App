import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Interactive Learning',
    text: ' Learn and practice programming concepts in a game-like environment, making study sessions enjoyable and efficient.',
  },
  {
    title: 'Continous Updates',
    text: 'The app will regularly get updated with new technologies and new questions.',
  },
  {
    title: 'Ideal for Interviews',
    text: 'Focus on the theoretical side of programming, preparing for interviews with well-crafted questions and problems.',
  },
];

const Features = () => (
  <div className="codely__features section__padding" id="features">
    <div className="codely__features-heading">
      <h1 className="gradient__text">What makes Codely the best app for practicing?</h1>
    </div>
    <div className="codely__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;