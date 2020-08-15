import React, { useState } from 'react';
import './AddOptions.css';
import {
  InputGroup, FormControl, Button, Form,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch, useSelector } from 'react-redux';
import { decision } from '../../actions';

const AddOptions = () => {
  const dispatch = useDispatch();
  const [option, setOption] = useState('');
  const options = useSelector((state) => state.decisionsReducer.suggestedOptions);
  const [initWarning, setInitWarning] = useState('Please add options to get started!');
  const [warning, setWarning] = useState('');
  const [error, setError] = useState('');

  const onOptionChange = (e) => {
    setOption(e.target.value);
  };

  const onFormSubit = (e) => {
    e.preventDefault();
    const opt = option.trim();
    if (!opt) {
      setWarning('Enter valid value to add item');
      setInitWarning('');
      setError('');
    } else
    if (options.indexOf(opt) > -1) {
      setError('This option already exists');
      setInitWarning('');
      setWarning('');
    } else {
      dispatch(decision(option));
      setWarning('');
      setInitWarning('');
      setError('');
    }
    setOption('');
  };

  return (
    <div className="container px-o pt-3">
      <div className="options-body-list">
        {warning && <p className="font-weight-bold text-center mb-0 py-4">{warning}</p>}
        {error && <p className="font-weight-bold text-center mb-0 py-4">{error}</p>}
        {initWarning && <p className="text-center mb-0 py-4">{initWarning}</p>}

        <p className="text-center mb-0"> </p>
      </div>
      <Form onSubmit={onFormSubit}>
        <div className="row">
          <div className="col-lg-9">
            <InputGroup className="mb-3">
              <FormControl
                aria-label="Option"
                value={option}
                className="add-options-input"
                onChange={onOptionChange}
              />
            </InputGroup>
          </div>
          <div className="col-lg-3">
            <Button type="submit" value="submit" className="add-options-button font-weight-bold" block onClick={onFormSubit}>
              Add Option
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AddOptions;
