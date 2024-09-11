import { IImage } from "src/shared/genericTypes/generic-types";

export interface playlistsSchema {
    id: string,
    href: string,
    images: IImage[],
    name: string,
    tracks: {
        href: string,
        total: number
    },
    type: string
}