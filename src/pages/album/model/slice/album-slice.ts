import { createSlice } from "@reduxjs/toolkit";
import { initialStateSchema } from "src/app/providers/store/config/ThunkSchema";
import { getAlbumTC } from "../service/getAlbum.service";
import { IAlbum } from "../types/album-schema";

const initialState: initialStateSchema<IAlbum> = {
    data: {
        album_type: "",
        artists: [],
        href: "",
        id: "",
        images: [],
        name: "",
        release_date: "",
        total_tracks: "",
        tracks: [],
        type: ""
    },
    isLoading: true,
    error: null
}

const albumSlice = createSlice({
    name: 'spotify/albumData',
    initialState,
    reducers: {},
    extraReducers(builder)  {
        builder
        .addCase(getAlbumTC.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder
        .addCase(getAlbumTC.rejected, (state) => {
            state.error = true;
        })
    }
})

export const {reducer: albumReducer} = albumSlice;