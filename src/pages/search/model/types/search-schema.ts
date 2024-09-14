import { IAlbum } from "src/pages/album/model/types/album-schema"
import { IArtist } from "src/pages/artist/model/types/artist-schema"
import { IPlaylist } from "src/pages/playlist/model/types/playlist-schema"
import { ITrack } from "src/pages/track/model/types/track-schema"

export interface searchQuery {
    q: string,
    type: string
}

export interface searchSchema {
    tracks?: {
        items: ITrack[]
    },
    artists?: {
        items: IArtist[] 
    },
    albums?: {
        items: IAlbum[] 
    },
    playlists?: {
        items: IPlaylist[] 
    },
    shows?: {
        items: [] 
    },
    episodes?: {
        items: [] 
    },
    audoibooks?: {
        items: [] 
    }
}

export interface ISearchData {
    data: searchSchema
}