import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeDecision } from '../../actions';

import './Options.css'

const Options = () => {
let option = useSelector(state => state.decisionsReducer.suggestedOptions)
const dispatch = useDispatch();

const onClickRemove = (i,x) => {

  console.log('yesss')

  // const newOption = option.filter(aa => {
  //   return aa !== x
  // })
  // dispatch(removeDecision(...newOption))
    // dispatch(removeDecision(option))
  // const index = option.indexOf(x)

//   if(index === i) {

// const newOption = option.splice(index, 1)
//     dispatch(removeDecision(newOption))
//   } else {
//     console.log('ii', 'noo')

//   }

//   option = option.filter (index => index !== i)

//   const index = option.indexOf(x)
//   if(index === i) {
//     option = option.splice(index, 1)
//     console.log(option, 'dd')
//     dispatch(removeDecision(x, i))

// console.log('opton', option)
//   } else {
//     console.log('ii', 'noo')
    
  // }
}


 return (
<div>
  {option.map((x, i) => (
    <div key ={i} className="d-flex justify-content-between py-2 option-list px-3">
      <p key={i} className='py-4 px-3 mb-0'> {`${i+1}. ${x}`} </p>
      <button type="button" className="mb-0 btn options-list-button" onClick={() => onClickRemove(i, x)}>Remove</button>
    </div>
    )) }
</div>

);
  }
export default Options;
