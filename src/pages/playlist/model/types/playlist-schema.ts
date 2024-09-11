import { ITrack } from "src/pages/track/model/types/track-schema"
import { IImage } from "src/shared/genericTypes/generic-types"

export interface IOwner {
    followers: object,
    display_name: string,
    id: string,
    uri: string
}

export interface IPlaylistTrack {
    added_at: string,
    track: ITrack
}

export interface IPlaylist {
    desciption: string,
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