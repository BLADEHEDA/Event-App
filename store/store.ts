import { configureStore } from '@reduxjs/toolkit';
import personReducer from '../store/Slices/personSlice'

const store = configureStore({
  reducer: {
    person:personReducer ,
  },
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
