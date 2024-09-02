import {Home} from "src/pages/home";
import {Search} from "src/pages/search";
import * as paths from "src/shared/const/router";
import { Router } from "../types/router-type";
import { AlbumPage } from "src/pages/album";
import { AppRoutes } from "src/shared/const/router";

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
    }
}