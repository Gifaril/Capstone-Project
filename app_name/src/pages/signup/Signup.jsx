import React, { useState } from "react";
import axios from "axios";
import { useNavigate  } from "react-router-dom";

import "./signup.scss";
import FormInput from "../../components/form/FormInput";

function Signup() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const navigate = useNavigate()


  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    console.log(uname.value, pass)
    // Find user login info
    try {
        const response = await axios.post('http://localhost:8080/api/admin/login', {
        password: pass.value,
        email: uname.value
        }); 
        console.log(response)
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

  // JSX code for signup form
  const Signup = () => {
    return <div className="app">
        <form>
            <FormInput placeholder="Username"/>
            <FormInput placeholder="Email"/>
            <FormInput placeholder="Fullname"/>
            <FormInput placeholder="Something"/>
        </form>
    </div>
  }
}

export default Signup;