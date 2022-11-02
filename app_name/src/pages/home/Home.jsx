import { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import axios from "axios";
import MenuIcon from '@mui/icons-material/Menu';
import EditIcon from '@mui/icons-material/Edit';
import Modal from "../../components/modal/ModalTwo";
import DeleteIcon from '@mui/icons-material/Delete';

const Home = () => {
    const [values, setValues] = useState([]);
    const [user, setUser] = useState('')

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

    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <div className="important-announcements">
                    <div className="announcement">
                        <Modal fetchData={fetchData} show="modalShow"/>
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
                                <tr key={value.id}>
                                    <td>{value.title}</td>
                                    <td>{value.created_at.split('T')[0]}</td>
                                    {user === 'admin' ? 
                                    <td className="actions"><DeleteIcon className="icon"/></td>
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

