import { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { RefreshContext } from '../context/RefreshContext';
import './Navigation.scss';
import { UploadFile } from './UploadFile';

export const Navigation =()=>{
    
    const handleSearch = (e:any) => {
        e.preventDefault()
    }

    const refresh = useContext(RefreshContext)

    return (
        <div className="navigation-container">
            
            {
                refresh?.upload === false ? null : <UploadFile/>
            }
            
            <button className='button-custom' onClick={() => refresh?.setUpload(!refresh?.upload)}>upload</button>
            <form className="example" onSubmit={handleSearch}>
                <input onChange={(e) => refresh?.setFilter(e.target.value)} type="text" placeholder="Search.." name="search"/>
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
    )
}