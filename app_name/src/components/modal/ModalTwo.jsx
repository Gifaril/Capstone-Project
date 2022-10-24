import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./modal.css";

const NewAnn = (props) => {
    console.log(props)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
    <Button className="add" variant="primary" onClick={handleShow}>
        ADD
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
                <h6>NEW ANNOUNCEMENT</h6>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="wrapper">
                <textarea placeholder="New Announcement"></textarea>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">SAVE</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default NewAnn 