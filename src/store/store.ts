import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/authSlice';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    users: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: false,
    }).concat(sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
