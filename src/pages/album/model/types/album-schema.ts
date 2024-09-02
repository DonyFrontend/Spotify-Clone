import { IImage } from "src/shared/genericTypes/generic-types";

export interface IAlbumArtists {
    href: string,
    name: string,
    type: string,
    id?: string
}

export interface IAlbum {
    album_type: string,
    total_tracks: string,
    href: string,
    id: string,
    images: IImage[],   
    name: string,
    release_date: string,
    type: string,
    artists: IAlbumArtists[],
    tracks: []
}


export interface AlbumSchema {
    isLoading: boolean,
    data: [] | object,
    error: null
}