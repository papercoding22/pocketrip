import {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import useUserDatabase from './services/users/hooks/useDatabase';
import {
  setAccessToken,
  setRefreshToken,
} from './services/users/redux/userSlice';
import {RootState} from './store';

const useBootstrap = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) =>
      state.user.accessToken !== null && state.user.refreshToken !== null,
  );
  const {accessToken, refreshToken} = useUserDatabase();

  useEffect(() => {
    if (accessToken && refreshToken) {
      dispatch(setAccessToken(accessToken));
      dispatch(setRefreshToken(refreshToken));
    }
  }, [accessToken, dispatch, refreshToken]);

  return {
    isAuthenticated,
  };
};

export default useBootstrap;
