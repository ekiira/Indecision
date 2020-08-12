import React, { useState } from 'react';
import './AddOptions.css';
import {
  InputGroup, FormControl, Button, Form,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddOptions = () => {
  const [option, setOption] = useState('');

  const onOptionChange = (e) => {
    setOption(e.target.value);
  };

  const onFormSubit = (e) => {
    e.preventDefault();
    console.log(option);
    setOption('');
  };
  return (
    <div className="container px-o pt-3">
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
            <Button type="submit" value="submit" className="add-options-button font-weight-bold" block onSubmit={onFormSubit}>
              Add Option
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AddOptions;
