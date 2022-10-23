import "./profile.scss"
import { useState } from "react";
import ProfForm from '../../components/profForm/ProfForm';
import Sidebar from "../../components/sidebar/Sidebar";


const Profile = () => {
  const [values, setValues] = useState({
    Firstname: "",
    Middlename: "",
    Lastname: "",
    Birthday: "",
    Email: "",
    Mobileno: "",
    Address: "",
    
  });

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "First name",
      label: "First Name",
      required: true,
    },
    {
      id: 2,
      name: "middlename",
      type: "text",
      placeholder: "Middle Name",
      label: "Middle Name",
      required: true,
    },
    {
      id: 3,
      name: "lastname",
      type: "text",
      placeholder: "Last Name",
      label: "Last Name",
    },
    {
      id: 4,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
        id: 6,
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessage: "It should be a valid email address!",
        label: "Email",
        required: true,
    },
    {
        id: 7,
        name: "mobile number",
        type: "integer",
        placeholder: "Mobile Number",
        label: "Mobile Number",
    },
    {
        id: 8,
        name: "address",
        type: "text",
        placeholder: "Address",
        label: "Address",
    },
      
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile">
        <Sidebar/>
        <div className="profile container">
            <div className="profilecon">
                <form  onSubmit={handleSubmit}>
                    {inputs.map((input) => (
                        <ProfForm 
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}
                    <button>Update Profile</button>
                </form>
            </div>

        </div>
    </div>
  );
};

export default Profile;