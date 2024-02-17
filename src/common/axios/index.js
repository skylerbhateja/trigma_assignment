import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async () => {
  let user = await AsyncStorage.getItem('user');
  const {token} = JSON.parse(user);
  return token;
};

export const axiosInstance = axios.create({
  baseURL: 'https://apidummyadmin.trigma.in/api/auth/',
});

axiosInstance.interceptors.request.use(async req => {
  const token = await getToken();
  req.headers.Authorization = `Bearer ${token}`;
  return req;
});
