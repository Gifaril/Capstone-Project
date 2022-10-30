import "./trainings.css";
import Sidebar from '../../components/sidebar/Sidebar';
import TrainingsModal from "../../components/trainingsMod/TrainingsModal";
import { useState, useEffect } from "react";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';

const Trainings = () => {

    return (
        <div className="Trainings">
            <Sidebar/>
            <div className="TrainingContainer">
                <div className="trainTop">
                    <p>Trainings</p>
                    <TrainingsModal  show="modalShow"/>
                </div>
                <table>
                    <thead>
                        <th>Training Name</th>
                        <th>Certificate No.</th>
                        <th>Duration</th>
                        <th>Skill Acquired</th>
                        <th>Conducted By:</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>National Tuna Congress</td>
                            <td>12345u823</td>
                            <td>3 Days</td>
                            <td>HACCP </td>
                            <td>Gensan HSOASO</td>
                            <td className="delete"><DeleteIcon/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
        
    )
}

export default Trainings
