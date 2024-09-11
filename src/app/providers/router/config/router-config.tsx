import {Home} from "src/pages/home";
import {Search} from "src/pages/search";
import * as paths from "src/shared/const/router";
import { Router } from "../types/router-type";
import { AlbumPage } from "src/pages/album";
import { AppRoutes } from "src/shared/const/router";
import { Artist } from "src/pages/artist";
import { Track } from "src/pages/track";
import { Category } from "src/pages/category";
import { Playlist } from "src/pages/playlist";

export const RouterConfig: Record<AppRoutes, Router> = {
    [AppRoutes.HOME]: {
        path: paths.RouteHome(),
        element: <Home/>
    },
    [AppRoutes.SEARCH]: {
        path: paths.RouteSearch(),
        element: <Search/>
    },
    [AppRoutes.ALBUM]: {
        path: paths.RouteAlbum(),
        element: <AlbumPage/>
    },
    [AppRoutes.ARTIST]: {
        path: paths.RouteArtist(),
        element: <Artist/>
    },
    [AppRoutes.TRACK]: {
        path: paths.RouteTrack(),
        element: <Track/>
    },
    [AppRoutes.CATEGORY]: {
        path: paths.RouteCategory(),
        element: <Category/>
    },
    [AppRoutes.PLAYLIST]: {
        path: paths.RoutePlaylist(),
        element: <Playlist/>
    }
}