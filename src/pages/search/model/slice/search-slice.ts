import { createSlice } from "@reduxjs/toolkit";
import { initialStateSchema } from "src/app/providers/store/config/ThunkSchema";
import { searchSchema } from "../types/search-schema";
import { searchTC } from "../service/searchTC.service";

const initialState: initialStateSchema<searchSchema> = {
    isLoading: true,
    error: null,
    data: {}
}

const searchSlice = createSlice({
    name: 'spotify/searchData',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(searchTC.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        })
        builder
        .addCase(searchTC.rejected, state => {
            state.error = true;
        })
    },
})

export const {reducer: searchReducer} = searchSlice;