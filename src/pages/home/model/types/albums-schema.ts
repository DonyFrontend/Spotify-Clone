export interface NewRelIMage{
    height: number,
    url: string,
    width: number
}

export interface IAlbum {
    album_type: string,
    // artists: IArtist[],
    images: NewRelIMage[],
    name: string,
    release_date: string,
    total_tracks: number,
    type: string
    href: string
}


export interface INewReleases {
    albums: {
        items: IAlbum[]
    }
}