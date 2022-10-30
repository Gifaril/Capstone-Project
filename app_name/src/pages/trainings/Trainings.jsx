import "./trainings.css";
import Sidebar from '../../components/sidebar/Sidebar';

const Trainings = () => {
    return (
        <div className="Trainings">
            <Sidebar/>
            <div className="TrainingContainer">
                <div className="trainTop">
                    <p>Trainings</p>
                </div>
                <table>
                    <thead>
                        <th>Training Name</th>
                        <th>Certificate No.</th>
                        <th>Duration</th>
                        <th>Skill Acquired</th>
                        <th>Conducted By:</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>National Tuna Congress</td>
                            <td>12345u823</td>
                            <td>3 Days</td>
                            <td>HACCP </td>
                            <td>Gensan HSOASO</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
        
    )
}

export default Trainings
