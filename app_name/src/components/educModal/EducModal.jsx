import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./educModal.css";
import axios from "axios";

const EducModal = (props) => {
    console.log(props)
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [date, setDate] = useState('2022-10-11');



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const token = window.localStorage.getItem('token')

  const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
     await axios.post('http://localhost:8080/api/batch',
    {
      batch_name: name,
      batch_date: date
      }, config);
      setName('')
      await props.fetchData()
  }


  return (
    <>
    <Button className="addEduc" variant="primary" onClick={handleShow}>
        Add Student
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
                <h6>Educational Details:</h6>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="Educwrapper">
              <textarea value={name} onChange={e=> setName(e.target.value)} placeholder="Last Name" label="Category"></textarea>
              <textarea value={name} onChange={e=> setName(e.target.value)} placeholder="First Name" label="Category"></textarea>
              <textarea value={name} onChange={e=> setName(e.target.value)} placeholder="Middle Name" label="Category"></textarea>    
              <textarea value={name} onChange={e=> setName(e.target.value)} placeholder="Batch No." label="Category"></textarea>   
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleOnSubmit} className="saveEduc" variant="primary">SAVE</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EducModal