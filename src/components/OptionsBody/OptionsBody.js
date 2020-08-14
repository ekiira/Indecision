import React from 'react';
import './OptionsBody.css';
import AddOptions from '../AddOptions/AddOptions';
import Options from '../Options/Options';

const OptionsBody = () => (
  <div className="options-body-wrapper pb-3">
    <div className="container d-flex justify-content-between options-body-header py-2">
      <p className="mb-0 options-body-header-text-one font-weight-bold py-2">Your Options</p>
      <button className="mb-0 btn options-body-header-text-two">Remove all</button>
    </div>

    <div className="options-body-list py-4">
      <p className="text-center mb-0"> Please add options to get started!</p>
    </div>
      <Options />
      <AddOptions />
  </div>

);

export default OptionsBody;
