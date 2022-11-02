import React from 'react'
import FileItem from "../../components/fileItem/FileItem";
import axios from 'axios'

const FileList = ({ files, removeFile }) => {
    const downloadHandler = (id) => {
        const token = window.localStorage.getItem('token')

        const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
        axios.get(`http://localhost:8080/api/file/${id}/download`, config)
            .then((res) => {
                console.log(res)
                window.open(res.data.data)})
            .catch((err) => console.error(err));
    }
    return (
        <ul className="file-list">
            {
                files &&
                files.map(f => (<FileItem
                    key={f.file_id}
                    file={f}
                    downloadFile={downloadHandler} />))
            }
        </ul>
    )
}

export default FileList