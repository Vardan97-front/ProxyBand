const reducers = {
    getUsersFulfilled: (state, action) => {
        state.users = action.payload;
    },
    getUserPostsFulfilled: (state, action) => {
        state.userPosts = action.payload;
    },
    celarUserPosts: (state) => {
        state.userPosts = [];
    },
    getUserAlbumsFulfilled: (state, action) => {
        state.userAlbums = action.payload;
    },
    celarUserAlbums: (state) => {
        state.userAlbums = [];
    },
}

export default reducers;