import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ActionInterface } from './authTypes';

interface InitialStateInterface {
  user: null | any;
}

const initialState: InitialStateInterface = {
  user: null,
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    registerUser: (state: InitialStateInterface, action: ActionInterface) => {
      return { ...state, user: action.payload };
    },
  },
});
//Actions
export const { registerUser } = registerSlice.actions;
// Selectors
export const currentUser = (state: RootState) => state.users.user;
// Reducer
export default registerSlice.reducer;
