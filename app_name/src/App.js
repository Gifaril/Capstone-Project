import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Trainings from "./pages/trainings/Trainings";
import Educ from "./pages/education/Educ";
import Profile from "./pages/profile/Profile";


import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";

const ProptectedRoute = ()=> {
  const value = window.localStorage.getItem('token');
  return value ? <Outlet/> : <Navigate to ='/login'/>

}

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
      <Route path="signup" element={<Signup/>} />
        <Route path="login" element={<Login/>} />
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="profile" element={<Profile/>}/>
          <Route path="education" element={<Educ/>}/>
          <Route path="training" element={<Trainings/>}/>
        </Route>
      </Routes>
    </BrowserRouter>,
    </div>
  );
}

export default App;
