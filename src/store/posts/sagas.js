import { takeLatest, call, put } from "redux-saga/effects";
import { getPosts, setPosts } from ".";
import postsService from "../../services/PostsService";

function* getPostsHandler(action) {
  try {
    const posts = yield call(postsService.getAll, action.payload);
    
    yield put(setPosts(posts));  
  } catch (error) {
    console.log(error);
  }
}

export function* watchGetPosts() {
  yield takeLatest(getPosts.type, getPostsHandler);
}