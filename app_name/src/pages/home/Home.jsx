import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import data from "./mock-data.json";
import MenuIcon from '@mui/icons-material/Menu';
import EditIcon from '@mui/icons-material/Edit';
import Modal from "../../components/modal/ModalTwo";
import DeleteIcon from '@mui/icons-material/Delete';

const Home = () => {
    const [values, setValues] = useState(data);

    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="important-announcements">
                    <div className="announcement">
                        <Modal show="modalShow"/>
                        <table>
                            <thead>
                                <tr>
                                    <th>ANNOUNCEMENTS </th>
                                    <th className="menu"><MenuIcon className="icon"/></th>
                                </tr>
                            </thead>
                            <tbody>
                                {values.map((value)=> (
                                <tr>
                                    <td>{value.announcement}</td>
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

