import { useContext, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { fetchUploadFile } from '../api/File'
import { RefreshContext } from '../context/RefreshContext'
import './UploadFile.scss'

export const UploadFile = ()=> {
    
    const refresh = useContext(RefreshContext)
    const [name, setName] = useState('upload your file')
    const [file, setFile] = useState<File | null>(null)

    const queryClient = useQueryClient()
    const uploadFileMutation = useMutation(fetchUploadFile , {
        onSuccess: () => {
            queryClient.invalidateQueries('file')
        }
    })

    const handleFile = (e : File | null) => {
        setName(e!.name)
        setFile(e)
    }
    
    const handleUpload = () => {
        if(file === null) setName('choose your file!')
        else uploadFileMutation.mutate(file!)
    }

    return (
        <>
        <div className="modal-background" onClick={() => refresh?.setUpload(!refresh?.upload)}></div>
        
        <div className="modal-pop-up-container">
                <button className='close-button' onClick={() => refresh?.setUpload(!refresh?.upload)}>close</button>
                <div className="wrapper">
                    <div className="file-upload">
                        <input type="file" onChange={(e) => handleFile(e.target.files![0])}/>
                        <i className="fa fa-arrow-up"></i>
                    </div>
                </div>
                <div className="modal-upload-button-container">
                    <div className="">{name}</div>
                    <button className='button-custom' onClick={handleUpload}>upload</button>
                </div>
            </div>
        </>
    )
}