import { createAsyncThunk } from "@reduxjs/toolkit";
import { IArtist } from "../types/artist-schema";
import { ThunkConfig } from "src/app/providers/store/config/ThunkSchema";
import { instance } from "src/shared/api/instance";

export const getArtistTC = createAsyncThunk<IArtist, { id: string | undefined}, ThunkConfig<string>>(
    'spotify/artist',
    async ({ id }, thunkApi) => {
        const { rejectWithValue } = thunkApi;

        try {
            const res = await instance.get(`/v1/artists/${id}`);
            return res.data;

        } catch (error) {
            rejectWithValue(String(error))
        }
    }
)