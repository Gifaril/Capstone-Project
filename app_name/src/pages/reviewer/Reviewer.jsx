import './reviewer.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { useState, useEffect } from "react";
import FileUpload from '../../components/fileUpload/FileUpload';
import FileList from '../../components/fileList/FileList';
import axios from 'axios'

const Reviewer = () => {
    const [files, setFiles] = useState([])
            
    const fetchData = async () => {
        const token = window.localStorage.getItem('token')

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
        const res = await axios.get('http://localhost:8080/api/files', config);
        console.log(res.data)
        setFiles(res.data.data);
    
    }

    useEffect(() => {
      
        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);;
      }, [])

    const removeFile = (filename) => {
        setFiles(files.filter(file => file.name !== filename))
      }

    return (
        <div className="reviewer">
            <Sidebar/>
            <div className="RevContainer">
                <div className="Rev">
                    <FileUpload files={files} setFiles={setFiles}
                    removeFile={removeFile} />
                    <FileList files={files} removeFile={removeFile} />
                </div>
            </div>
        </div>
        
    )
}

export default Reviewer