import { createSlice } from "@reduxjs/toolkit";
import { initialStateSchema } from "src/app/providers/store/config/ThunkSchema";
import { ITrack } from "../types/track-schema";
import { getTrack } from "../service/getTrack.service";

const initialState: initialStateSchema<ITrack> = {
    data: {
        disc_number: 0,
        duration_ms: 0,
        explicit: false,
        id: '',
        is_local: false,
        name: '',
        popularity: '',
        type: '',
        artists: []
    },
    isLoading: true,
    error: null
}

const trackSlice = createSlice({
    name: 'spotify/trackData',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getTrack.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder
        .addCase(getTrack.rejected, state => {
            state.error = true;
        })
    },
})

export const {reducer: trackReducer} = trackSlice;