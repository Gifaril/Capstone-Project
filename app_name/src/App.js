import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Trainings from "./pages/trainings&seminars/Trainings";
import Experiences from "./pages/experiences/Experiences";
import Education from "./pages/education/Education";


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
          <Route path="education" element={<Education/>}/>
          <Route path="experiences" element={<Experiences/>}/>
          <Route path="education" element={<Education/>}/>
          <Route path="trainings" element={<Trainings/>}/>
        </Route>
      </Routes>
    </BrowserRouter>,
    </div>
  );
}

export default App;
