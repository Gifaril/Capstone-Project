import './educ.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { useState } from "react";
import data from "./data.json";
import EducModal from "../../components/educModal/EducModal";

const Educ = () => {
    const [values, setValues] = useState(data);

    return (
        <div className="educ">
            <Sidebar/>
            <div className="educContainer">
                <Navbar/>
                <div className="educations">
                    <div className="education">
                        <div className='educTop'>
                            <p>Educational Attainment</p>
                            <EducModal show="modalShow"/>
                        </div>
                        <table>
                            <thead>
                                <th></th>
                                <th>Category</th>
                                <th>Year</th>
                                <th>School</th>
                                <th>Course</th>
                            </thead>
                            <tbody>
                                {values.map((value)=> (
                                <tr>
                                    <td></td>
                                    <td>{value.Category}</td>
                                    <td>{value.Year}</td>
                                    <td>{value.School}</td>
                                    <td>{value.Course}</td>
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
