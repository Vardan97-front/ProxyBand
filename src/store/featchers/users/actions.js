import { createAsyncThunk } from "@reduxjs/toolkit";
import { generalService } from "../../../services";

const actions = {
    getUsers: () => async (dispatch) => {
        await dispatch(thunks.getUsers());
    },
    getUserPosts: (userId) => async (dispatch) => {
        await dispatch(thunks.getUserPosts(userId));
    },
    getUserAlbums: (userId) => async (dispatch) => {
        await dispatch(thunks.getUserAlbums(userId));
    }
};

const thunks = {
    getUsers: createAsyncThunk("users/getUsers", () => generalService.getUsers()),
    getUserPosts: createAsyncThunk("users/getUserPosts", (userId) => generalService.getUserPosts(userId)),
    getUserAlbums: createAsyncThunk("users/getUserAlbums", (userId) => generalService.getUserAlbums(userId)),
};

export default actions;
export { thunks };