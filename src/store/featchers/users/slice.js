import { createSlice } from '@reduxjs/toolkit';
import { thunks } from "./actions";
import reducers from "./reducers";

const initialState = {
    users: [],
    userPosts: [],
    userAlbums: [],
};

export const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        ...reducers,
        resetState: () => initialState,
    },
    extraReducers: builder => {
        builder.addCase(thunks.getUsers.fulfilled, reducers.getUsersFulfilled);
        builder.addCase(thunks.getUserPosts.fulfilled, reducers.getUserPostsFulfilled);
        builder.addCase(thunks.getUserAlbums.fulfilled, reducers.getUserAlbumsFulfilled);
    },
});