import { createSlice } from "@reduxjs/toolkit";
import { initialStateSchema } from "src/app/providers/store/config/ThunkSchema";
import { getNewAlbumsTC } from "../service/new_albums.service";
import { INewReleases } from "../types/newRel-schema";

const initialState: initialStateSchema<INewReleases> = {
    isLoading: true,
    error: null,
    data: {albums: {items: []}}
}

const newAlbumsSlice = createSlice({
    name: 'albums-state/new-albums',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getNewAlbumsTC.fulfilled, (state, action) => {
            state.isLoading = false,
            state.data = action.payload;
        }),
        builder.addCase(getNewAlbumsTC.rejected, state => {
            state.error = true;
        })
    },
})

export const {reducer: newAlbumsReducer} = newAlbumsSlice;
export const {reducer: newAlbumsActions} = newAlbumsSlice;