import React from 'react';
import { Button } from 'react-bootstrap';
import './DecisionBanner.css'

const DecisonBanner = () => {
  const onFormSubit = () => {
    alert('done')
  }
return (
  <div className='pb-5'>
    <Button type="button"  className="decision-button py-4 font-weight-bold" block onClick={onFormSubit}>
        What should i do?
    </Button>
  </div>
  )
}

export default DecisonBanner;