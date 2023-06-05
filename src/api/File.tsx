export const fetchFiles = async (filter:string) =>  {
    const res = await fetch(`http://localhost:8000/file/all-files/${filter}`, {
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    })
    return res.json()
}


export const fetchDeleteFile = async (id:string) => {
    const res = await fetch(`http://localhost:8000/file/file-delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    })
    return res.json()
}

export const fetchUploadFile = async (file:File) => {
    let data = new FormData()
    data.append('file', file, file.name)
    const res = await fetch(`http://localhost:8000/file/file-upload`, {
        method: 'POST', 
        body: data
    }).catch(console.error)
    .then(console.info)

    return res
}