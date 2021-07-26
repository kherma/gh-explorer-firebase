import { configureStore, getDefaultMiddleware, combineReducers, AnyAction, Reducer } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import repositoriesReducer from './repositoriesSlice';
import themeReducer from './themeSlice';
import { createInitialState } from './initialState';

const combinedReducer = combineReducers({
  auth: authReducer,
  repositories: repositoriesReducer,
  theme: themeReducer,
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === 'auth/signOut/fulfilled') {
    state = createInitialState();
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof combinedReducer>;
export type AppDispatch = typeof store.dispatch;
