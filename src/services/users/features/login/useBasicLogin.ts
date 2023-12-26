import {useState} from 'react';
import Toast from 'react-native-toast-message';

import {useDispatch} from 'react-redux';

import UserService from '../../apis';
import UserServiceInterface from '../../apis/interfaces';
import useDatabase from '../../hooks/useDatabase';
import {setAccessToken, setRefreshToken} from '../../redux/userSlice';

const useLogin = () => {
  const dispatch = useDispatch();
  const {storeAccessToken, storeRefreshToken} = useDatabase();
  const [loading, setLoading] = useState(false);

  const login = async (params: UserServiceInterface.LoginParams) => {
    try {
      setLoading(true);
      const resp = await UserService.login(params);
      storeAccessToken(resp.accessToken);
      storeRefreshToken(resp.refreshToken);
      dispatch(setAccessToken(resp.accessToken));
      dispatch(setRefreshToken(resp.refreshToken));
      return resp;
    } catch (error) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Error',
        text2: (error as Error).message,
        visibilityTime: 3000,
        autoHide: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    storeAccessToken(null);
    storeRefreshToken(null);
    dispatch(setAccessToken(null));
    dispatch(setRefreshToken(null));
  };

  return {
    loading,
    login,
    logout,
  };
};

export default useLogin;
