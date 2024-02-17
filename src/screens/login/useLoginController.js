import {useMemo, useState} from 'react';
import {axiosInstance} from '../../common/axios';
import {useDispatch, useSelector} from 'react-redux';
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from '../../common/redux/features/user/UserSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useLoginController = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useSelector(state => state.user);
  const shouldDisable = useMemo(() => !email || !password, [email, password]);
  const dispatch = useDispatch();

  const onChangeEmail = email => {
    setEmail(email);
  };
  const onChangePassword = password => {
    setPassword(password);
  };

  const onSubmit = async () => {
    try {
      const res = await axiosInstance.post('login', {
        email: email,
        password: password,
      });
      const {data} = res.data;
      await AsyncStorage.setItem('user', JSON.stringify(data));
      dispatch(LOGIN_SUCCESS(data));
    } catch (err) {
      const {message} = err.response.data;
      dispatch(LOGIN_FAIL(message));
    }
  };

  return {
    login,
    email,
    password,
    onChangeEmail,
    onChangePassword,
    onSubmit,
    shouldDisable,
  };
};

export default useLoginController;
