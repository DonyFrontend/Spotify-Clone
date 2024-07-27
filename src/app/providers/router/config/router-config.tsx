import Home from "src/pages/home/ui/Home";
import Search from "src/pages/search/ui/Search";
import { AppRoutes, RouteHome, RouteSearch } from "src/shared/const/router";

export type Router = {
    path: string,
    element: React.ReactNode
}

export const RouterConfig: Record<AppRoutes, Router> = {
    [AppRoutes.HOME]: {
        path: RouteHome(),
        element: <Home/>
    },
    [AppRoutes.SEARCH]: {
        path: RouteSearch(),
        element: <Search/>
    }
}