import "./trainingsMod.css";
import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from "axios";

const TrainingsModal = (props) => {
    console.log(props)
    const [show, setShow] = useState(false);


const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const handleOnSubmit = async (e) => {
    e.preventDefault() }
    return (
        <>
        <Button className="addTraining" variant="primary" onClick={handleShow}>
            Add Batch
          </Button>
    
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>
                <div className="title">
                    <h6>Training Details:</h6>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
             <div className="Trainingwrapper">
                    <textarea placeholder="Batch Name:" label="Category"></textarea>
                    <textarea placeholder="Date:" label="Category"></textarea>
                    
             </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleOnSubmit} className="saveTraining" variant="primary">SAVE</Button>
            </Modal.Footer>
          </Modal>
        </>
    )
}
    
export default TrainingsModal