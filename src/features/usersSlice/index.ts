import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UsersState {
  isLogin: boolean,
  userName: string,
  userEmail: string,
  token: string
}

const initialState: UsersState = {
  isLogin: false,
  userName: '',
  userEmail: '',
  token: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    usersLoading(state, action: PayloadAction<UsersState>) {
      state.isLogin = action.payload.isLogin;
      state.token = action.payload.token;
      state.userEmail = action.payload.userEmail;
      state.userName = action.payload.userName;
    },
  },
});

export const { usersLoading } = usersSlice.actions;

export default usersSlice.reducer;
