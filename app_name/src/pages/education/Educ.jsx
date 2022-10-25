import './educ.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { useState, useEffect } from "react";
import axios from "axios";
import EducModal from "../../components/educModal/EducModal";

const Educ = () => {
    const [values, setValues] = useState([]);
            
    const fetchData = async () => {
        const token = window.localStorage.getItem('token')

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
        <div className="educ">
            <Sidebar/>
            <div className="educContainer">
                <Navbar/>
                <div className="educations">
                    <div className="education">
                        <div className='educTop'>
                            <p>Batch</p>
                            <EducModal fetchData={fetchData} show="modalShow"/>
                        </div>
                        <table>
                            <thead>
                                <th></th>
                                <th>Batch name</th>
                                <th>Date</th>
                            </thead>
                            <tbody>
                                {values.map((value)=> (
                                <tr>
                                    <td></td>
                                    <td>{value.batch_name}</td>
                                    <td>{value.batch_date}</td>
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
