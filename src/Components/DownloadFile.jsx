import React, { useState } from 'react'
import saveAs from 'file-saver'
import styles from './DownloadFile.module.css'

const DownloadFile = (props) => {
    const [selectedFile, setSelectedFile] = useState(0)

    const onChangeHandler = (e) => {
        setSelectedFile(e.target.files[0])
    }

    const onDownload = () => {
        saveAs(selectedFile)
    }

    return (
        <div className={styles.form}>
            <form>
                <label>Select file to upload</label> 
                <input type="file" onChange={onChangeHandler} />
                {selectedFile ? (
                    <div
                        onClick={onDownload}
                        className={styles.download}>
                        Download File
                    </div>
                ) : null}
            </form>
        </div>
    )
}

export default DownloadFile
