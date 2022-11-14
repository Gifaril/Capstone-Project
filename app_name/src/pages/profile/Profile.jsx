import './profile.css';
import ProfForm from '../../components/profForm/ProfForm';
import Sidebar from '../../components/sidebar/Sidebar';
import { useState, useEffect } from "react";
import Pic from "../../components/pic/avatar2-removebg-preview.png";

const Profile = () => {
    const [values, setValues] = useState({
    lastname: "",
    firstname: "",
    birthday: "",
    phone:"",
    email:"",
    address:"",
    })
    const inputs = [
        {
            id: 1,
            name: "laststname",
            type: "text",
            placeholder: "Lasttname",
            label: "Lastname",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "firstname",
            type: "text",
            placeholder: "Firstname",
            label: "Firstname",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 3,
            name: "birthday",
            type: "date",
            placeholder: "Birthday",
            label: "Birthday",
        },
        {
            id: 4,
            name: "email",
            type: "email",
            placeholder: "Email",
            label: "Email",
            required: true,
        },
        {
            id: 5,
            name: "address",
            type: "text",
            placeholder: "Address",
            label: "Address",
            required: true,
        },
    ]
    const handleSubmit = (e) => {
        e.preventDefault();
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
      
      

    return(
        <div className='Profile'>
            <Sidebar/>
            <div className='ProfileContainer'>
                <img className='pic' src={Pic} alt="pic"/>
                <span className="name">student 122</span>
                <form className="form3" onSubmit={handleSubmit}>
                    {inputs.map((input) => (
                        <ProfForm
                            key={input.id}
                            {...input}
                         value={values[input.name]}
                         onChange={onChange}
                         />
                    ))}
                    <button className='buttonprof'>Save</button>
                </form>
            </div>

        </div>
    )

}

export default Profile