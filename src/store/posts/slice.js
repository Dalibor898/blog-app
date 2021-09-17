import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  getPosts() {},
}

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
  },
  reducers: {
    setPosts(state, action) {
      state.data = action.payload;
    },
    ...middlewareActions,
  },
});

export default postsSlice.reducer;

export const {getPosts, setPosts} = postsSlice.actions;