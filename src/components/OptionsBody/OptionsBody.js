import React from 'react';
import './OptionsBody.css';
import { useDispatch } from 'react-redux';
import AddOptions from '../AddOptions/AddOptions';
import Options from '../Options/Options';

import { removeAllDecision } from '../../actions';

const OptionsBody = () => {
  const dispatch = useDispatch();
  const onRemovalAll = () => {
    dispatch(removeAllDecision());
  };

  return (
    <div className="options-body-wrapper pb-3">
      <div className="container d-flex justify-content-between options-body-header py-2">
        <p className="mb-0 options-body-header-text-one font-weight-bold py-2">Your Options</p>
        <button
          type="button"
          className="mb-0 btn options-body-header-text-two"
          onClick={onRemovalAll}
        >
          Remove all
        </button>
      </div>
      <Options />
      <AddOptions />
    </div>

  );
};
export default OptionsBody;
