import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/authSlice';
import createSagaMiddleware from 'redux-saga';
import { createUserWatcher } from './Auth/authSagas';

const sagaMiddleware = createSagaMiddleware();
console.log(authReducer);
export const store = configureStore({
  reducer: {
    users: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: false,
    }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(createUserWatcher);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
