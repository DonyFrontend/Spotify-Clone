export enum AppRoutes{
    SEARCH = 'search',
    HOME = 'auth',
    ALBUM = 'album',
    ARTIST = 'artist',
    TRACK = 'track'
}

export const RouteSearch = () => '/search';
export const RouteHome = () => '/';
export const RouteAlbum = () => '/album/:id'
export const RouteArtist = () => '/artist/:id'
export const RouteTrack = () => '/track/:id'

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: RouteHome(),
    [AppRoutes.SEARCH]: RouteSearch(),
    [AppRoutes.ALBUM]: RouteAlbum(),
    [AppRoutes.ARTIST]: RouteArtist(),
    [AppRoutes.TRACK]: RouteTrack(),
}