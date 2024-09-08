import { createSlice } from "@reduxjs/toolkit";
import { initialStateSchema } from "src/app/providers/store/config/ThunkSchema";
import { IArtist } from "../types/artist-schema";
import { getArtistTC } from "../service/getArtist.service";

const initialState: initialStateSchema<IArtist> = {
    isLoading: true,
    error: null,
    data: {
        followers: {total: 0, href: ''},
        href: '',
        id: '',
        images: [],
        name: '',
        popularity: 0,
        type: '',
        url: '',
        genres: [],
        external_urls: {spotify: ''}
    }
}

const artistSlice = createSlice({
    name: 'spotify/artistData',
    initialState,
    reducers: {},
    extraReducers(builder)  {
        builder
        .addCase(getArtistTC.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder
        .addCase(getArtistTC.rejected, (state) => {
            state.error = true;
        })
    }
})

export const {reducer: artistReducer} = artistSlice;