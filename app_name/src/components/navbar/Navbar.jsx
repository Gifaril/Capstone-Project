import "./navbar.scss"
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="Dashboard">
                  <DashboardOutlinedIcon/><span>Dashboard</span>
                </div>
            </div>
        </div>
        
    )
}

export default Navbar