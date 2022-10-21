import "./sidebar.scss"
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate  } from "react-router-dom";



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
                    KLTCstudentPortal</span>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                        <DashboardOutlinedIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <PersonOutlineOutlinedIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <SchoolOutlinedIcon className="icon"/>
                        <span>Education</span>
                    </li>
                    <li>
                        <WorkOutlineIcon className="icon"/>
                        <span>Experiences</span>
                    </li>
                    <li>
                        <ModelTrainingIcon className="icon"/>
                        <span>Trainings and Seminars</span>
                    </li>
                    <p className="title">USER</p>
                    <li onClick={handleLogout}>
                        < LogoutIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
        
    )
}

export default Sidebar