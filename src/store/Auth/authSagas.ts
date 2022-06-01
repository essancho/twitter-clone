import { call, put, takeEvery } from 'redux-saga/effects';
import { registerUser } from './authAPI';
import { ActionInterface } from './authTypes';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
// Workers
function* fetchUser(action: ActionInterface): Generator {
  try {
    // API CALL
    const user = yield call(registerUser, action.payload);
    // Sending to store
    yield put({ type: 'USER_REGISTER_SUCCEEDED', user: user });
  } catch (e) {
    yield put({ type: 'USER_REGISTER_FAILED', error: e });
  }
}
// Watchers
export function* fetchUserWatcher(): Generator {
  yield takeEvery('USER_REGISTER_REQUESTED', fetchUser);
}
