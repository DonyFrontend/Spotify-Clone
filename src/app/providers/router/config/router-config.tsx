import Home from "src/pages/home";
import Search from "src/pages/search";
import { AppRoutes, RouteHome, RouteSearch } from "src/shared/const/router";
import { Router } from "../types/router-type";


export const RouterConfig: Record<AppRoutes, Router> = {
    [AppRoutes.HOME]: {
        path: RouteHome(),
        element: <Home/>
    },
    [AppRoutes.SEARCH]: {
        path: RouteSearch(),
        element: <Search/>
    },
}