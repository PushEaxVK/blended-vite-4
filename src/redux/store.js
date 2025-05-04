import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import todoReducer from './todoSlice';
import filterReducer from './filterSlice';

const persistConfig = {
  key: 'todoListRoot',
  version: 2,
  storage,
  whitelist: ['items'],
};

const persistedTodoReducer = persistReducer(persistConfig, todoReducer);

const rootReducer = combineReducers({
  todos: persistedTodoReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
