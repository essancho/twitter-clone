import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface InitialStateInterface {
  user: null | any;
  error: null | string;
}

const initialState: InitialStateInterface = {
  user: null,
  error: null,
};

export const registerSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUserSuccess: (state: any, action: any) => {
      console.log('reducer');
      return { ...state, user: action.payload.user };
    },
    createUserError: (state: any, action: any) => {
      console.log('reducer');
      return { ...state, error: action.payload.error };
    },
  },
});
//Actions
export const { createUserSuccess, createUserError } = registerSlice.actions;
// Selectors
export const currentUser = (state: RootState) => state.users.user;
// Reducer
export default registerSlice.reducer;
