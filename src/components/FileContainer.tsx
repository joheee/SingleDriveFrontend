import { useContext } from "react"
import { useQuery } from "react-query"
import { fetchFiles } from "../api/File"
import { RefreshContext } from "../context/RefreshContext"
import useDebounce from "../hooks/useDebounce"
import { FileInterface } from "../interface/Interface"
import { FileCard } from "./FileCard"
import './FileContainer.scss'

export const FileContainer =()=>{
    
    const refresh = useContext(RefreshContext)
    const debouncedFilter = useDebounce(refresh!.filter, 200)
    const { data, status } = useQuery(['file', debouncedFilter], () => fetchFiles(refresh!.filter))

    if(status === 'loading') return <div className="">loading...</div>

    return (
        <div className="file-container">
        {
            data.map((item:FileInterface,i:number) => (
                <FileCard {...item} key={i}/>
            ))
        }
        </div>
    )
}