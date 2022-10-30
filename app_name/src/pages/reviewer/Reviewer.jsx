import './reviewer.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import { useState } from "react";
import FileUpload from '../../components/fileUpload/FileUpload';
import FileList from '../../components/fileList/FileList';

const Reviewer = () => {
    const [files, setFiles] = useState([])

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