import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import SchoolIcon from '@mui/icons-material/School';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">KLTCadmin</span>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">Main</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <PersonOutlineOutlinedIcon className="icon"/>
                        <span>Users</span>
                    </li>
                    <li>
                        < GroupOutlinedIcon className="icon"/>
                        <span>Trainers</span>
                    </li>
                    <li>
                        <DocumentScannerIcon className="icon"/>
                        <span>Batches</span>
                    </li>
                    <li>
                        <SchoolIcon className="icon"/>
                        <span>Students</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        < LogoutIcon className="icon"/>
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