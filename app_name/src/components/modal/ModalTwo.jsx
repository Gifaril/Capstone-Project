import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./modal.css";
import axios from "axios";

const NewAnn = (props) => {
    console.log(props)
  const [show, setShow] = useState(false);
  const [announcement, setAnnouncement] = useState('');
  console.log(announcement)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const token = window.localStorage.getItem('token')

  const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
     await axios.post('http://localhost:8080/api/announcement',
    {
      title: announcement
      }, config);
      setAnnouncement('')
      await props.fetchData()
  }

  return (
    <>
    <Button className="addAnn" variant="primary" onClick={handleShow}>
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
                <textarea value={announcement} onChange={(e)=> setAnnouncement(e.target.value)} placeholder="New Announcement"></textarea>
         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleOnSubmit} variant="primary">SAVE</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default NewAnn 