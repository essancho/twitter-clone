import { call, put, takeLatest } from 'redux-saga/effects';
import { registerActions } from './authActions';
import { registerUser } from './authAPI';
import { createUserError, createUserSuccess } from './authSlice';
import { ActionInterface } from './authTypes';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
// Workers
function* createUserWorker(action: ActionInterface): Generator {
  try {
    // API CALL
    const user = yield call(registerUser, action.payload);
    // Sending to store
    yield put(createUserSuccess({ user: user }));
  } catch (e: any) {
    console.error(e);
    yield put(createUserError({ error: e.code }));
  }
}
// Watchers
export function* createUserWatcher(): Generator {
  console.log('WATCHER');
  yield takeLatest(registerActions.TRIGGER, createUserWorker);
}
