import { createSlice } from "@reduxjs/toolkit";
import { initialStateSchema } from "src/app/providers/store/config/ThunkSchema";
import { GenreSchema } from "../types/categories-schema";
import { getGenres } from "../service/getCategories.service";

const initialState: initialStateSchema<GenreSchema> = {
    isLoading: true,
    error: null,
    data: {
        categories: {
            href: '',
            items: [],
            next: '',
            total: 0
        }
    }
}

const genresSlice = createSlice({
    name: 'spotify/genresData',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getGenres.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        })
        builder
        .addCase(getGenres.rejected, state => {
            state.error = true;
        })
    },
})

export const {reducer: categoriesReducer} = genresSlice;