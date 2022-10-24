import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./educModal.css";

const EducModal = (props) => {
    console.log(props)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
    <Button className="addEduc" variant="primary" onClick={handleShow}>
        Add Education
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
                <textarea placeholder="Category" label="Category"></textarea>
                <textarea placeholder="Year" label="Year"></textarea>
                <textarea placeholder="School" label="School"></textarea>
                <textarea placeholder="Course" label="Course"></textarea>
                
                
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="saveEduc" variant="primary">SAVE</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EducModal