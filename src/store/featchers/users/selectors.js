const selectors = {
    selectUsers: (state) => state.users.users,
    selectUserPosts: (state) => state.users.userPosts,
    selectUserAlbums: (state) => state.users.userAlbums,
}

export default selectors;