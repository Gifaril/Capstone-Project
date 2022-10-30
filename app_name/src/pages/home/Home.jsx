import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import axios from "axios";
import MenuIcon from '@mui/icons-material/Menu';
import EditIcon from '@mui/icons-material/Edit';
import Modal from "../../components/modal/ModalTwo";
import DeleteIcon from '@mui/icons-material/Delete';

const Home = () => {
    const [values, setValues] = useState([]);
            
    const fetchData = async () => {
        const token = window.localStorage.getItem('token')

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
                                    <th className="menu"><MenuIcon className="icon"/></th>
                                </tr>
                            </thead>
                            <tbody>
                                {values.map((value)=> (
                                <tr key={value.id}>
                                    <td>{value.title}</td>
                                    <td className="edit"><EditIcon  className="icon"/>  <DeleteIcon className="icon"/></td>
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

