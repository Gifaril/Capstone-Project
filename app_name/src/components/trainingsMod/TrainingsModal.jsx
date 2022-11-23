import "./trainingsMod.css";
import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from "axios";

const TrainingsModal = (props) => {
    console.log(props)
    const [show, setShow] = useState(false);
    const [batch_name, setBatch] = useState('');
    const [date, setDate] = useState('');
    console.log(batch_name)
    console.log(date)


const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const handleOnSubmit = async (e) => {
  e.preventDefault() 
  const token = window.localStorage.getItem('token')

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
    await axios.post('http://localhost:8080/api/trainings',
    {
      title: batch_name, date
      }, config);
      setBatch('')
      await props.fetchData()
      handleClose()
  }

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
                    <h6>Batch Details:</h6>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
             <div className="Trainingwrapper">
                    <textarea value={batch_name} onChange={(e)=> setBatch(e.target.value)} placeholder="Batch Name:" label="Category"></textarea>
                    <textarea value={date} onChange={(e)=> setDate(e.target.value)}placeholder="Date:" label="Category"></textarea>
                    
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