import Home from "src/pages/home";
import Search from "src/pages/search";
import LogIn from "src/pages/auth/login";
import { AppRoutes, RouteHome, RouteLogIn, RouteSearch } from "src/shared/const/router";

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
    },
    [AppRoutes.LOGIN]: {
        path: RouteLogIn(),
        element: <LogIn/>
    }
}