import { IImage } from "src/shared/genericTypes/generic-types";

export interface IAlbumArtists {
    href: string,
    name: string,
    type: string,
    id?: string
}

export interface copyrights {
    text: string,
    type: string
}

export interface AlbumTrackSchema {
    artists: IAlbumArtists[],
    disc_number?: number,
    duration_ms: number,
    href: string,
    name: string,
    type: string,
    track_number?: number,
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
    tracks: {items: AlbumTrackSchema[]},
    copyrights: copyrights[]
}


export interface AlbumSchema {
    isLoading: boolean,
    data: [] | object,
    error: null
}
