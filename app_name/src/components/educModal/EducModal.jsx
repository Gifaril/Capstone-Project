import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./educModal.css";
import axios from "axios";

const EducModal = (props) => {
    const [batchId, setbatchId] = useState('');


    const [batch, setBatch] = useState([]);


  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const token = window.localStorage.getItem('token')

  const config = {
      headers: { Authorization: `Bearer ${token}` }
  }; 
    console.log(props.student)
     await axios.put(`http://localhost:8080/api/student/${props.student.student_id}/add_batch`,
    {
      batch_id: parseInt(batchId)
      }, config);
      await props.fetchData()
      props.handleClose()
  }

    const fetchData = async () => {
      const token = window.localStorage.getItem('token')

  const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
      const res = await axios.get('http://localhost:8080/api/batch', config);
      console.log(res.data)
      setBatch(res.data.data);

  }

useEffect(() => {
  
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);;
  }, [])


  return (
    <>

      <Modal
        show={props.show}
        onHide={()=>props.handleClose()}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="title">
                <h6>Add Batch to student:</h6>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="Educwrapper">
              <label >Select batch: </label>
              <select onChange={(e)=> setbatchId(e.target.value)} id="batch" name="batchs">
                {batch.map((batchData)=> (
                  <option value={batchData.batch_id}>{batchData.batch_name}</option>
                ))}
              </select>
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