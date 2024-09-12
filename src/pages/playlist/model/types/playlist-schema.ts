import { IAlbum } from "src/pages/album/model/types/album-schema"
import { IArtist } from "src/pages/artist/model/types/artist-schema"
import { IImage } from "src/shared/genericTypes/generic-types"

export interface IOwner {
    followers: object,
    display_name: string,
    id: string,
    uri: string
}

export interface IPlayTrack {
    album?: IAlbum,
    artists: IArtist[],
    disc_number: number,
    duration_ms: number,
    explicit: boolean,
    name: string,
    id: string,
    linked_from ?: object,
    popularity: string,
    is_local: boolean,
    type: string,
    href: string,
    track_number: number,
}

export interface IPlaylistTrack {
    added_at: string,
    track: IPlayTrack
}

export interface IPlaylist {
    description: string,
    external_urls?: {spotify: string},
    followers: {
        href: string,
        total: number
    },
    href: string,
    id: string,
    images: IImage[],
    name: string,
    owner: IOwner,
    tracks: {
        total: number,
        items: IPlaylistTrack[] 
    },
    type: string
}