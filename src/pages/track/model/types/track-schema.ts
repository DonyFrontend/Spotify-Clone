import { IAlbum } from "src/pages/album/model/types/album-schema";
import { IArtist } from "src/pages/artist/model/types/artist-schema";

export interface ITrack {
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
}