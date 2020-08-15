import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeDecision } from '../../actions';

import './Options.css';

const Options = () => {
  const option = useSelector((state) => state.decisionsReducer.suggestedOptions);
  const dispatch = useDispatch();

  // Remove single option
  const onClickRemove = (x) => {
    dispatch(removeDecision(x));
  };

  return (
    <div>
      {option.map((x, i) => (
        <div key={i} className="d-flex justify-content-between py-2 option-list px-3">
          <p key={i} className="py-4 px-3 mb-0">
            {' '}
            {`${i + 1}. ${x}`}
            {' '}
          </p>
          <button type="button" className="mb-0 btn options-list-button" onClick={() => onClickRemove(x)}>Remove</button>
        </div>
      )) }
    </div>

  );
};
export default Options;
