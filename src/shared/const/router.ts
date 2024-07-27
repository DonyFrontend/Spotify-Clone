export enum AppRoutes{
    SEARCH = 'search',
    HOME = 'auth'
}

export const RouteSearch = () => '/search';
export const RouteHome = () => '/';

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: RouteHome(),
    [AppRoutes.SEARCH]: RouteSearch(),
}