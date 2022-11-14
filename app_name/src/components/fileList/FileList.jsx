import React from 'react'
import FileItem from "../../components/fileItem/FileItem";
import axios from 'axios'

const FileList = ({ files, removeFile, fetchData, user }) => {
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

    const deleteHandler = async (id) => {
        const token = window.localStorage.getItem('token')

        const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
        await axios.delete(`http://localhost:8080/api/file/${id}`, config)
        await fetchData()
    }
    return (
        <ul className="file-list">
            {
                files &&
                files.map(f => (<FileItem
                    user={user}
                    key={f.file_id}
                    file={f}
                    downloadFile={downloadHandler} deleteHandler={deleteHandler} />))
            }
        </ul>
    )
}

export default FileList