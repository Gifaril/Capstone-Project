import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Students from "./pages/students/Students";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
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
        <Route path="login" element={<Login/>} />
        <Route element={<ProptectedRoute/>} path="/">
          <Route index element={<Home/>} />
          <Route path="users">
            <Route index element={<Students/>} />
            <Route path=":userId" element={<Single/>} />
            <Route path="new" element={<New/>} />
          </Route>
          <Route path="batch">
            <Route index element={<Students/>} />
            <Route path=":batchId" element={<Single/>} />
            <Route path="new" element={<New/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>,
    </div>
  );
}

export default App;
