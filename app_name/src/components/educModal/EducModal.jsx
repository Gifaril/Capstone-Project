import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./educModal.css";
import axios from "axios";

const EducModal = (props) => {
    console.log(props)
    const [show, setShow] = useState(false);
    const [fname, setfName] = useState('');
    const [lname, setlName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);
    const [birthdate, setBirthdate] = useState('2022-10-22');
    const [batchId, setbatchId] = useState('');
    const [password, setpassword] = useState('');


    const [batch, setBatch] = useState([]);




  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const token = window.localStorage.getItem('token')

  const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
     await axios.post('http://localhost:8080/api/students',
    {
      first_name: fname,
      last_name: lname,
      password: password,
      email: email,
      birthdate: birthdate,
      age: parseInt(age),
      batch_id: parseInt(batchId)
      }, config);
      await props.fetchData()
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
              <textarea value={fname} onChange={e=> setfName(e.target.value)} placeholder="Last Name" label="Category"></textarea>
              <textarea value={lname} onChange={e=> setlName(e.target.value)} placeholder="First Name" label="Category"></textarea>
              <textarea value={email} onChange={e=> setEmail(e.target.value)} placeholder="Email" label="Category"></textarea>   
              <textarea value={age} onChange={e=> setAge(e.target.value)} placeholder="Age" label="Category"></textarea>   
              <textarea value={password} onChange={e=> setpassword(e.target.value)} placeholder="password"  label="Category"></textarea>   

              <label>Start date: </label>
              <input onChange={(e)=> setBirthdate(e.target.value)} type="date" id="start" name="trip-start"
              value={birthdate}
              min="2022-10-01"></input> 
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