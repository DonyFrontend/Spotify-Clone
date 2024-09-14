import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumReducer } from "src/pages/album/model/slice/album-slice";
import { artistReducer } from "src/pages/artist/model/slice/artist-slice";
import { playlistReducer } from "src/pages/playlist/model/slice/playlistSlice";
import { categoriesReducer } from "src/pages/search/model/slice/categories-slice";
import { searchReducer } from "src/pages/search/model/slice/search-slice";
import { trackReducer } from "src/pages/track/model/slice/track-slice";
import { spotifyApi } from "src/shared/api/spotify-api";

const store = configureStore({
    reducer: {
        [spotifyApi.reducerPath]: spotifyApi.reducer,
        album: albumReducer,
        artist: artistReducer,
        track: trackReducer,
        categories: categoriesReducer,
        playlist: playlistReducer,
        search: searchReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(spotifyApi.middleware)
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);

export default store;