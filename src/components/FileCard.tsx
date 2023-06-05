import { QueryClient, useMutation, useQueryClient } from "react-query"
import { fetchDeleteFile } from "../api/File"
import { DOWNLOAD, FILE, PICTURE } from "../config/Variable"
import { FileInterface } from "../interface/Interface"
import './FileCard.scss'

export const FileCard = (item:FileInterface) => {
    
    const handleDownload = (url:string) => {
        window.open(url)
    }

    const queryClient = useQueryClient()

    const deleteFileMutation = useMutation(fetchDeleteFile, {
        onSuccess: () => {
            queryClient.invalidateQueries('file')
        }
    })
    
    const handleDelete = () => {
        deleteFileMutation.mutate(item.id)
    }

    return ( 
        <div className="file-card-container">
            <div className="file-card-image">
                <img src={`${PICTURE}/${item.picture}`} alt="" />
            </div>
            <div className="file-card-text-container">
                <div className="">{item.name}</div>
                <div className="">{item.size}</div>
                <div className="">{item.created_at}</div>
                <div className="file-card-button-container">
                    <button className="button-custom" onClick={()=>handleDownload(DOWNLOAD +  item.name)}>download</button>
                    <button className="button-error" onClick={handleDelete}>delete</button>
                </div>
            </div>
        </div>
    )
}