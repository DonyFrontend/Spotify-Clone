import { createSlice } from "@reduxjs/toolkit";
import { initialStateSchema } from "src/app/providers/store/config/ThunkSchema";
import { IPlaylist } from "../types/playlist-schema";
import { getPlaylist } from "../service/getPlaylist.service";

const initialState: initialStateSchema<IPlaylist> = {
    isLoading: true,
    error: null,
    data: {
        desciption: '',
        followers: {href: '', total: 0},
        href: '',
        id: '',
        images: [],
        name: '',
        owner: {display_name: '', followers: {}, id: '', uri: ''},
        external_urls: {spotify: ''},
        tracks: {
            items: [],
            total: 0
        },
        type: ''
    }
}

const playlistSlice = createSlice({
    name: 'spotify/playlistData',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getPlaylist.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        })
        builder
        .addCase(getPlaylist.rejected, state => {
            state.error = true;
        })
    },
})

export const {reducer: playlistReducer} = playlistSlice;