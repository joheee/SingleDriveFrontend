export interface FileInterface {
    name: string,
    picture: string,
    created_at: string,
    size: string,
    id: string
}

export interface RefreshContextInterface {
    upload: boolean,
    setUpload: (value:boolean) => void,
    filter: string,
    setFilter: (value:string) => void
}