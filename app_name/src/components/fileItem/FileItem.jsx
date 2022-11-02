import React from 'react'
import DescriptionIcon from '@mui/icons-material/Description';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import './fileItem.scss'

const FileItem = ({ file, downloadFile }) => {
    return (
        <>
            <li
                className="file-item"
                key={file.file_id}>
                <DescriptionIcon/>
                <p className='Pp'>{file.file_name}</p>
                <div className="actions">
                    <div className="loading"></div>
                    {!file.isUploading &&
                        <FileDownloadIcon
                            onClick={() => downloadFile(file.file_id)} />
                    }
                </div>
            </li>
        </>
    )
}

export default FileItem