import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITrack } from "../types/track-schema";
import { ThunkConfig } from "src/app/providers/store/config/ThunkSchema";
import { instance } from "src/shared/api/instance";

export const getTrack = createAsyncThunk<ITrack, {id: string | undefined}, ThunkConfig<string>>(
    'spotify/getTrack',
    async ({id}, thunkApi) => {
        const {rejectWithValue} = thunkApi;
        
        try {
            const res = await instance.get(`/v1/tracks/${id}`);
            return res.data;
        } catch (error) {
            rejectWithValue(String(error))
        }
    }
)