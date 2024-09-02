import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "src/app/providers/store/config/ThunkSchema";
import { IAlbum } from "../types/album-schema";
import { instance } from "src/shared/api/instance";

export const getAlbumTC = createAsyncThunk<IAlbum, {id: string | undefined}, ThunkConfig<string>>(
    'spotify/album',
    async ({id}, thunkApi) => {
        const {rejectWithValue} = thunkApi;
        
        try {
            const responce = await instance.get(`/v1/albums/${id}`)
            return responce.data;
        } catch (error) {
            console.log(error);
            rejectWithValue(String(error));
        }
    }
)