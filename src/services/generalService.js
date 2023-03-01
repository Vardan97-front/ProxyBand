import { axios, handleResponse } from './axiosClient';

export const generalService = {
    // Users
    getUsers: () => axios.get("/users").then(handleResponse),

    // Posts
    getUserPosts: (userId) => axios.get("/posts", { params: { userId } }).then(handleResponse),

    // Albums
    getUserAlbums: (userId) => axios.get("/albums", { params: { userId } }).then(handleResponse),
};