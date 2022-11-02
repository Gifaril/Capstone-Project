import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './fileUpload.scss'
import axios from 'axios'
import AWS from 'aws-sdk'

AWS.config.update({
    accessKeyId: 'AKIATBIOLDO7GKUTHIHT',
    secretAccessKey: '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'
})

const myBucket = new AWS.S3({
    params: { Bucket: 'capstone-upload'},
    region: 'ap-southeast-1',
})

const FileUpload = ({ files, setFiles, removeFile }) => {
    const uploadHandler = (event) => {
        const file = event.target.files[0];
        console.log(file)
        if(!file) return;
        file.isUploading = true;
        setFiles([...files, file])

        const params = {
            Body: file,
            Bucket: 'capstone-upload',
            Key: file.name
        };

        myBucket.putObject(params)
            .on('httpUploadProgress', (evt) => {
                // setProgress(Math.round((evt.loaded / evt.total) * 100))
            })
            .send((err) => {
                if (err) console.log(err)
            })

        const token = window.localStorage.getItem('token')

        const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

        axios.post('http://localhost:8080/api/file',  {file_name: file.name}, config)
            .then((res) => {
                file.isUploading = false;
                setFiles([...files, {...file, file_name: file.name}])
            })
            .catch((err) => {
                // inform the user
                console.error(err)
                removeFile(file.name)
            });
    }

    return (
        <>
            <div className="file-card">

                <div className="file-inputs">
                    <input className='file-up' type="file" onChange={uploadHandler} />
                    <button>
                        <i>
                            <AddCircleIcon />
                        </i>
                        Upload
                    </button>
                </div>

                <p className="main">Supported files</p>
                <p className="info">PDF, JPG, PNG</p>

            </div>
        </>
    )
}

export default FileUpload