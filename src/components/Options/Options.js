import React from 'react';
import { useSelector } from 'react-redux';

import './Options.css'

const Options = () => {
const option = useSelector(state => state.decisionsReducer.suggestedOptions)

console.log('aa', option)
 return (
<div>
  {option.map((x, i) => (
    <div className="d-flex justify-content-between py-2 option-list px-3">
      <p key={i} className='py-4 px-3 mb-0'> {`${i+1}. ${x}`} </p>
      <button className="mb-0 btn options-list-button">Remove</button>
    </div>
    )) }
</div>

);
  }
export default Options;
