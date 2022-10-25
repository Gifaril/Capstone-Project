import "./sidebar.scss"
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate  } from "react-router-dom";
import { Link } from "react-router-dom";
import Pic from "../../components/pic/avatar2-removebg-preview.png";


const Sidebar = () => {
    const navigate = useNavigate()

    const handleLogout = ()=> {
        window.localStorage.removeItem("token")
        navigate(`/login`)
    }
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">
                    KLTC PORTAL</span>
                <img src={Pic} alt="pic"/>
                <span className="name"> Gifaril Mae Nisperos</span>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                        <DashboardOutlinedIcon className="icon"/>
                        <Link to="/"><span>Dashboard</span></Link>
                    </li>
                    <li>
                        <SchoolOutlinedIcon className="icon"/>
                        <Link to="/batch"><span>Batch</span></Link>
                    </li>
                    <li>
                        <ModelTrainingIcon className="icon"/>
                        <Link to="/training"><span>Trainings</span></Link>
                    </li>
                    <li>
                        <DocumentScannerOutlinedIcon className="icon"/>
                        <Link to="/reviewer"><span>Reviewer</span></Link>
                    </li>
                    <p className="title">USER</p>
                    <li onClick={handleLogout}>
                        < LogoutIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
        
    )
}

export default Sidebar