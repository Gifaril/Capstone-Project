import "./sidebar.scss"
import PeopleIcon from '@mui/icons-material/People';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate  } from "react-router-dom";
import { Link } from "react-router-dom";
import Pic from "../../components/pic/avatar2-removebg-preview.png";
import { useEffect, useState } from "react";
import axios from "axios";


const Sidebar = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [user, setUser] = useState('')


    const fetchData = async () => {
        const token = window.localStorage.getItem('token')
        const userType = window.localStorage.getItem('userType')
        setUser(userType)

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
        let url = 'http://localhost:8080/api/admin'
        if (userType==='student'){
            url = 'http://localhost:8080/api/student'
        }

        const res = await axios.get(url, config);
        console.log(res.data)
        setName(`${res.data.data.first_name} ${res.data.data.last_name}`);
    
    }

    useEffect(() => {
      
        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);;
      }, [])


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
                <span className="name">{name}</span>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                        <DashboardOutlinedIcon className="icon"/>
                        <Link to="/"><span>Dashboard</span></Link>
                    </li>
                    {user === 'admin' ? 
                        <li>
                            <PeopleIcon className="icon"/>
                            <Link to="/batch"><span>Students</span></Link>
                        </li>   : null 
                    }
                    {user === 'admin' ?
                    <li>
                        <ModelTrainingIcon className="icon"/>
                        <Link to="/trainings"><span>Batch</span></Link>
                    </li> : null
                    }
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