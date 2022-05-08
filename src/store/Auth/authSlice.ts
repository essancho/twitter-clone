import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface InitialStateInterface {
  user: string;
}

const initialState: InitialStateInterface = {
  user: 'User',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    createUser: (state) => {
      return { ...state, user: 'Madd' };
    },
  },
});
//Actions
export const { createUser } = authSlice.actions;
// Selectors
export const currentUser = (state: RootState) => state.users.user;
// Reducer
export default authSlice.reducer;
