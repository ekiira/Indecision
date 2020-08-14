import React from 'react';
import './Body.css';
import OptionsBody from '../OptionsBody/OptionsBody';
import DecisonBanner from '../DecisionBanner/DecisionBanner';

const Body = () => (
  <div className="px-o body-wrapper py-5">
    <div className="body-container container">
      <DecisonBanner />
      <OptionsBody />
    </div>
  </div>

);

export default Body;
