import React, { useState } from "react";
import axios from "axios";
import { useNavigate  } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [userType, setUserType] = useState('admin')
  const navigate = useNavigate()


  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    // Find user login info
    try {
        const response = await axios.post('http://localhost:8080/api/login', {
        password: pass.value,
        email: uname.value,
        type: userType
        }); 
        window.localStorage.setItem('userType', userType)
        window.localStorage.setItem('token', response.data.token)
        navigate(`/`)
    } catch (error) {
        setErrorMessages({ name: "pass", message: error.response.data });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="input-containers">
          <label>Email </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <select onChange={(e)=> setUserType(e.target.value)} id="user" name="users">
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app-login">
      <div className="login-form">
        <div className="title">SIGN IN</div>
        {renderForm}
        <p className="account">Need an Account?</p>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}

export default Login;
