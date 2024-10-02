import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './navbarSlice';
import usersReducer from './slices/usersSlice';
//import postsReducer from './slices/postsSlice';
//import commentsReducer from './slices/commentsSlice';

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    //users: usersReducer,
    //posts: postsReducer,
    //comments: commentsReducer,
  },
});