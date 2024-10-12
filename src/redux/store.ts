import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // используем localStorage по умолчанию
import { persistStore, persistReducer } from 'redux-persist';
import navbarReducer from './navbarSlice';
import postsReducer from './postsSlice';
import commentsReducer from './commentsSlice';

const persistConfig = {
  key: 'root',  // корневой ключ для хранения
  storage,      // выбрано хранилище localStorage
  whitelist: ['navbar'],  // указываем, какие редьюсеры хотим сохранить
};

const persistedReducer = persistReducer(
  persistConfig,
  navbarReducer, // ваш редьюсер или rootReducer, если комбинируете несколько
);

export const store = configureStore({
  reducer: {
    navbar: persistedReducer,
    posts: postsReducer,
    comments: commentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);