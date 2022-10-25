import React from 'react'
import DescriptionIcon from '@mui/icons-material/Description';
import DeleteIcon from '@mui/icons-material/Delete';
import './fileItem.scss'

const FileItem = ({ file, deleteFile }) => {
    return (
        <>
            <li
                className="file-item"
                key={file.name}>
                <DescriptionIcon/>
                <p className='Pp'>{file.name}</p>
                <div className="actions">
                    <div className="loading"></div>
                    {!file.isUploading &&
                        <DeleteIcon
                            onClick={() => deleteFile(file.name)} />
                    }
                </div>
            </li>
        </>
    )
}

export default FileItem