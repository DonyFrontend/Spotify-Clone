import { IImage } from "src/shared/genericTypes/generic-types"

export interface IGenre {
    href: string,
    icons: IImage[],
    id: string,
    name: string
}

export interface GenreSchema {
    categories: {
        href?: string,
        next?: string,
        total?: number,
        items: IGenre[]
    }
}