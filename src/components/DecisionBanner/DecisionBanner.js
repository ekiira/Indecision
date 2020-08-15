import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './DecisionBanner.css';
import { useSelector } from 'react-redux';

const DecisonBanner = () => {
  const option = useSelector((state) => state.decisionsReducer.suggestedOptions);
  const [selectedOption, setSelectedOption] = useState('');
  const [show, setShow] = useState(false);

  const hasOptions = (option.length > 0);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
    const randomPick = Math.floor(Math.random() * option.length);
    const opt = option[randomPick];
    setSelectedOption(opt);
  };

  return (
    <div className="pb-5">
      <Button
        type="button"
        className="decision-button py-4 font-weight-bold"
        block
        onClick={handleShow}
        disabled={!hasOptions}
      >
        What should i do?
      </Button>

      <Modal
        animation={false}
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Selected Option</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedOption && <p className="font-weight-bold text-center selected-option">{selectedOption}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DecisonBanner;
