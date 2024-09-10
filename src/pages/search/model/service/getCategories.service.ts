import { createAsyncThunk } from "@reduxjs/toolkit";
import { GenreSchema } from "../types/categories-schema";
import { ThunkConfig } from "src/app/providers/store/config/ThunkSchema";
import { instance } from "src/shared/api/instance";

export const getGenres = createAsyncThunk<GenreSchema, undefined, ThunkConfig<string>>(
    'spotify/genres',
    async (_, thunkApi) => {
        const {rejectWithValue} = thunkApi;       
    
        try {
            const res = await instance.get('/v1/browse/categories');
            return res.data;
        } catch (error) {
            rejectWithValue(String(error));
        }
    }
);