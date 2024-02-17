import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    token: '',
    message: '',
    is_error: false,
    is_LoggedIn: false,
  },
  reducers: {
    LOGIN_SUCCESS: (state, action) => {
      const {name, token} = action.payload;
      state.name = name;
      state.token = token;
      state.is_LoggedIn = true;
    },
    LOGIN_FAIL: (state, action) => {
      const message = action.payload;
      state.message = message;
      state.is_error = true;
      state.is_LoggedIn = false;
    },
    LOGOUT: state => {
      state.name = '';
      state.token = '';
      state.is_error = '';
      state.is_LoggedIn = false;
    },
  },
});

export const {LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} = userSlice.actions;
export default userSlice.reducer;
