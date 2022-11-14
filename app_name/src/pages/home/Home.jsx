import { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import axios from "axios";
import MenuIcon from '@mui/icons-material/Menu';
import EditIcon from '@mui/icons-material/Edit';
import NewModal from "../../components/modal/ModalTwo";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Home = () => {
    const [values, setValues] = useState([]);
    const [user, setUser] = useState('')
    const [show, setShow] = useState(false);
    const [announcement, setAnnouncement] = useState('');
    const [anid, setId] = useState();


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const fetchData = async () => {
        const token = window.localStorage.getItem('token')
        const userType = window.localStorage.getItem('userType')
        setUser(userType)
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
        const res = await axios.get('http://localhost:8080/api/announcement', config);
        console.log(res.data)
        setValues(res.data.data);
    
    }

    useEffect(() => {
      
        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);;
      }, [])

      const onDelete = async (id) => {
        console.log('iow')
        const token = window.localStorage.getItem('token')
        const userType = window.localStorage.getItem('userType')
        setUser(userType)
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
        await axios.delete(`http://localhost:8080/api/announcement/${id}`, config);
        await fetchData()
    } 

    const handleOnSubmit = async () => {
        const token = window.localStorage.getItem('token')
        const userType = window.localStorage.getItem('userType')
        setUser(userType)
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
        await axios.put(`http://localhost:8080/api/announcement/${anid}`, {title:announcement} ,config);
        await fetchData()
        handleClose()
    } 

    const handleUpdate = async (id, title) => {
        setAnnouncement(title)
        setId(id)
        handleShow()
    } 

    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <div className="important-announcements">
                    <div className="announcement">
                        <NewModal user={user} fetchData={fetchData} show="modalShow"/>
                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                            <Modal.Title>
                                <div className="title">
                                    <h6>Update ANNOUNCEMENT</h6>
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
                        <table>
                            <thead>
                                <tr>
                                    <th>ANNOUNCEMENTS </th>
                                    <th>DATE</th>
                                    {user === 'admin' ? 
                                    <th className="menu"><MenuIcon className="icon"/></th>
                                    : null
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {values.map((value)=> (
                                <tr key={value.announcement_id}>
                                    <td>{value.title}</td>
                                    <td>{value.created_at.split('T')[0]}</td>
                                    {user === 'admin' ? 
                                    <td className="edit"><EditIcon className="icon" onClick={()=>handleUpdate(value.announcement_id, value.title)}/><DeleteIcon className="icon" onClick={async ()=> await onDelete(value.announcement_id)}/></td>
                                    : null
                                    }
                                </tr>))} 
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Home

