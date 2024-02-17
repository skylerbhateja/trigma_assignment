import {configureStore} from '@reduxjs/toolkit';
import UserReducer from '../features/user/UserSlice';

const AppStore = () =>
  configureStore({
    reducer: {
      user: UserReducer,
    },
  });

export default AppStore;
