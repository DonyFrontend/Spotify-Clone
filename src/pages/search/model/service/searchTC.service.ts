import { createAsyncThunk } from "@reduxjs/toolkit";
import { searchQuery, searchSchema } from "../types/search-schema";
import { ThunkConfig } from "src/app/providers/store/config/ThunkSchema";
import { instance } from "src/shared/api/instance";

export const searchTC = createAsyncThunk<searchSchema, searchQuery, ThunkConfig<string>>(
    'spotify/searchParams',
    async ({q, type}, thunkApi) => {
        const {rejectWithValue} = thunkApi;
        const params = type ? {q, type, limit: 50} : {q, limit: 50, type: 'album,artist,playlist,track,show,episode,audiobook'};

        try {
            const res = await instance.get('/v1/search', {
                params
            })
            return res.data;
        } catch (error) {
            rejectWithValue(String(error))
        }
    }
)