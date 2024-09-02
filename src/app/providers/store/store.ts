import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumReducer } from "src/pages/album/model/slice/album-slice";
import { spotifyApi } from "src/shared/api/spotify-api";

const store = configureStore({
    reducer: {
        [spotifyApi.reducerPath]: spotifyApi.reducer,
        album: albumReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(spotifyApi.middleware)
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

export default store;