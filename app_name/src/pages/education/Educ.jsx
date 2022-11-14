import './educ.css';
import Sidebar from '../../components/sidebar/Sidebar';
import { useState, useEffect } from "react";
import axios from "axios";
import EducModal from "../../components/educModal/EducModal";
import EditIcon from '@mui/icons-material/Edit';
const Educ = () => {
    const [values, setValues] = useState([]);
    const [show, setShow] = useState(false);
    const [student, setStudent] = useState()
    const handleClose = () => setShow(false);
    const handleShow = (data) => {
        setStudent(data)
        setShow(true)};
    const fetchData = async () => {
        const token = window.localStorage.getItem('token')

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
        const res = await axios.get('http://localhost:8080/api/students', config);
        console.log(res.data)
        setValues(res.data.data);
    
    }

    useEffect(() => {
      
        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);;
      }, [])

    return (
        <div className="educ">
            <Sidebar/>
            <div className="educContainer">
                <div className="educations">
                    <div className="education">
                        <div className='educTop'>
                            <p>Students</p>
                            <EducModal 
                            student={student}
                            show={show}
                            handleClose={handleClose}
                            fetchData={fetchData}/>
                        </div>
                        <table>
                            <thead>
                                <th>Last Name</th>
                                <th> First Name</th>
                                <th> Email</th>
                                <th> Age</th>
                                <th> Batch</th>
                                <th> Actions</th>

                            </thead>
                            <tbody>
                                {values.map((value)=> (
                                <tr>
                                    <td>{value.last_name}</td>
                                    <td>{value.first_name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.age}</td>
                                    <td>{value.batch_id}</td>
                                    <td><EditIcon onClick={()=>handleShow(value)}/></td>
                                </tr>))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Educ
