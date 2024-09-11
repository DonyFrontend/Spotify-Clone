import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPlaylist } from "../types/playlist-schema";
import { ThunkConfig } from "src/app/providers/store/config/ThunkSchema";
import { instance } from "src/shared/api/instance";

export const getPlaylist = createAsyncThunk<IPlaylist, {id: string | undefined}, ThunkConfig<string>>(
    'spotify/playlist',
    async ({id}, thunkApi) => {
        const {rejectWithValue} = thunkApi;

        try {
            const res = await instance.get(`/v1/playlists/${id}`);
            return res.data
        } catch (error) {
            rejectWithValue(String(error))
        }
    }
)