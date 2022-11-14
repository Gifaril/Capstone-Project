import "./trainings.css";
import Sidebar from '../../components/sidebar/Sidebar';
import TrainingsModal from "../../components/trainingsMod/TrainingsModal";
import { useState, useEffect } from "react";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Trainings = () => {
    const [values, setValues] = useState([]);
    const [user, setUser] = useState('')

    const fetchData = async () => {
        const token = window.localStorage.getItem('token')
        const userType = window.localStorage.getItem('userType')
        setUser(userType)
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
        const res = await axios.get('http://localhost:8080/api/batch', config);
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
        <div className="Trainings">
            <Sidebar/>
            <div className="TrainingContainer">
                <div className="trainTop">
                    <p>Batch</p>
                    <TrainingsModal  show="modalShow"/>
                </div>
                <table>
                    <thead>
                        <th>Batch id</th>
                        <th>Batch name</th>
                        <th>Date</th>
                        {user === 'admin' ? 
                        <th>Action</th> : null
                         }
                    </thead>
                    <tbody>
                        {values.map((value)=> (
                        <tr>
                        <td>{value.batch_id}</td>
                        <td>{value.batch_name}</td>
                        <td>{value.batch_date}</td>
                        {user === 'admin' ? 
                        <td className="delete"><DeleteIcon/></td> : null
                         }
                    </tr>))} 
                    </tbody>
                </table>
            </div>
            
        </div>
        
    )
}

export default Trainings
