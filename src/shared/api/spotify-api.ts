import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../const/api-url";

export const spotifyApi = createApi({
    reducerPath: 'spotifyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set("Authorization", token)
            }
            return headers
        }
    }),
    endpoints: (build) => ({
        getNewReleases: build.query({
            query: () => "v1/browse/new-releases"
        }),
        getPlaylists: build.query({
            query: () => "v1/browse/featured-playlists"
        })
    })
})

export const { useGetNewReleasesQuery } = spotifyApi;
export const {useGetPlaylistsQuery} = spotifyApi;