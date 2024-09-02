import { createAsyncThunk } from '@reduxjs/toolkit';
import { INewReleases } from '../types/newRel-schema';
import { ThunkConfig } from 'src/app/providers/store/config/ThunkSchema';

export const getNewAlbumsTC = createAsyncThunk<INewReleases, undefined, ThunkConfig<string>>(
    'albums/new-releases',
    async (_, thunkApi) => {
        const {rejectWithValue, extra} = thunkApi;
        const token = localStorage.getItem('accessToken');

        try {
            const data = await extra.api.get('/v1/browse/new-releases', {
              headers: {
                Authorization: token
              }
            })
            return data.data;
        } catch (error) {
            rejectWithValue(String(error))
        }
    }
)