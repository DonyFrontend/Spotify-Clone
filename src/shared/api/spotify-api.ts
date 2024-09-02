import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../const/api-url";

export const spotifyApi = createApi({
    reducerPath: 'spotifyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            console.log(token);
            if (token) {
                headers.set("Authorization", token)
            }
            return headers
        }
    }),
    endpoints: (build) => ({
        getNewReleases: build.query({
            query: () => "v1/browse/new-releases"
        })
    })
})

export const { useGetNewReleasesQuery } = spotifyApi;