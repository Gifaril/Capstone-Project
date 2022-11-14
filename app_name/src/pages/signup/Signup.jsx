import { useState } from "react";
import "./signup.scss";
import FormInput from "../../components/form/FormInput";
import axios from "axios";
import { useNavigate  } from "react-router-dom";

const Signup = () => {
  const [values, setValues] = useState({
    first_name: "",
    email: "",
    last_name: "",
    password: "",
    confirmPassword: "",
    birthdate: "",
    age: ""
  });
  const navigate = useNavigate()

  const inputs = [
    {
      id: 1,
      name: "first_name",
      type: "text",
      placeholder: "First Name",
      label: "First Name",
      required: true,
    },
    {
      id: 2,
      name: "last_name",
      type: "text",
      placeholder: "Last Name",
      label: "Last Name",
      required: true,
    },
    {
      id: 3,
      name: "age",
      type: "text",
      placeholder: "Age",
      label: "Age",
      required: true,
    },
    {
      id: 4,
      name: "birthdate",
      type: "date",
      placeholder: "Birth date",
      label: "Birth date",
      required: true,
    },
    {
      id: 5,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 6,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 7,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
        // Find user login info
        console.log(values)
        try {
          const response = await axios.post('http://localhost:8080/api/students', {
          password: values.password,
          email: values.email,
          first_name: values.first_name,
          last_name: values.last_name,
          age: parseInt(values.age),
          birthdate: values.birthdate,
          }); 

          console.log(response)

          navigate(`/login`)
      } catch (error) {
        console.error(error)
      }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app-signup">
      <form className="form2" onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Signup;