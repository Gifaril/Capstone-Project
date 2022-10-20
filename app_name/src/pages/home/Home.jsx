import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import data from "./mock-data.json";
import Modal from "react-modal";
import MenuIcon from '@mui/icons-material/Menu';
import EditIcon from '@mui/icons-material/Edit';

Modal.setAppElement("#root")

const Home = () => {
    const [values, setValues] = useState(data);
    
    const [modalIsOpen, setmodalIsOpen] = useState(false);
    console.log(modalIsOpen);
    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="important-announcements">
                    <div className="announcement">
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
                                    <td className="edit"><EditIcon className="icon"/></td>
                                </tr>))} 
                            </tbody>
                        </table>
                        <Modal className="pop-up" isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} 
                            onRequestClose={() => setmodalIsOpen(false)}>
                            <h4>NEW ANNOUNCEMENT</h4>
                            <form>
                                <input type="text" name="new"/> 
                            </form>
                            <div className="close">
                            <button onClick={() => setmodalIsOpen(false)}>close</button>
                            </div>
                        </Modal>
                    </div>
                    <div className="new">
                        <button onClick={() => setmodalIsOpen(true)}>NEW</button>
                    </div>
                </div>
                <div className="cont">
                <div className="events">
                    events
                </div>
                <div className="calendar">
                    calendar
                </div>
                </div>
            </div>
        </div>
        
    )
}

export default Home

