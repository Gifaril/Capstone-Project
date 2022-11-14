import React from 'react'
import DescriptionIcon from '@mui/icons-material/Description';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import './fileItem.scss'
import DeleteIcon from '@mui/icons-material/Delete';

const FileItem = ({ file, downloadFile, deleteHandler, user }) => {
    return (
        <>
            <li
                className="file-item"
                key={file.file_id}>
                <DescriptionIcon/>
                <p className='Pp'>{file.file_name}</p>
                <div className="actions">
                    <div className="loading"></div>
                    {!file.isUploading &&(
                        <>
                        <FileDownloadIcon
                            onClick={() => downloadFile(file.file_id)} />
                        {user === 'admin'? 
                            <DeleteIcon
                            onClick={async () => await deleteHandler(file.file_id)} /> : null
                        }   
                        </>
                    )
                    }
                </div>
            </li>
        </>
    )
}

export default FileItem