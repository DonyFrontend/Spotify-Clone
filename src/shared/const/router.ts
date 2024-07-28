export enum AppRoutes{
    SEARCH = 'search',
    HOME = 'auth',
    LOGIN = 'login'
}

export const RouteSearch = () => '/search';
export const RouteHome = () => '/';
export const RouteLogIn = () => '/app/login'

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: RouteHome(),
    [AppRoutes.SEARCH]: RouteSearch(),
    [AppRoutes.LOGIN]: RouteLogIn() 
}