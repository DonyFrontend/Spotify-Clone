import { IImage } from "src/shared/genericTypes/generic-types"

export interface IArtist {
    followers: {
        total: number,
        href?: string
    },
    genres?: string[],
    href: string,
    id: string,
    images: IImage[],
    name: string,
    popularity: number,
    type: string,
    url: string,
    external_urls: {spotify: string}
}