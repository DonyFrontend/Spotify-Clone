import { IImage } from "src/shared/genericTypes/generic-types"

export interface INewRel {
    album_type: string,
    // artists: IArtist[],
    images: IImage[],
    name: string,
    release_date: string,
    total_tracks: number,
    type: string
    href: string
    id: string
}


export interface INewReleases {
    albums: {
        items: INewRel[]
    }
}

export interface NewReleasesSchema {
    isLoading: boolean,
    data: [] | object,
    error: null
}