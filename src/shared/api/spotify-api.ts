import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../const/api-url";

export const spotifyApi = createApi({
    reducerPath: 'spotifyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (build) => ({
        getNewReleases: build.query({
            query: (token: {data: string}) => ({url: "v1/browse/new-releases", headers: {Authorization: token.data}})
        })
    })
})

export const {useGetNewReleasesQuery} = spotifyApi;