import {useDispatch, useSelector} from 'react-redux';
import {useCallback} from 'react';

import {RootState} from '../../../store';
import {setAccessToken, setRefreshToken} from '../redux/userSlice';
import useDatabase from './useDatabase';
import {wait} from '../../../utils/mock';

const useBootstrapUserService = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) =>
      state.user.accessToken !== null && state.user.refreshToken !== null,
  );
  const {accessToken, refreshToken} = useDatabase();

  const bootstrap = useCallback(async () => {
    await wait(1000);
    if (accessToken && refreshToken) {
      dispatch(setAccessToken(accessToken));
      dispatch(setRefreshToken(refreshToken));
    }
  }, [accessToken, dispatch, refreshToken]);

  return {
    bootstrap,
    isAuthenticated,
  };
};

export default useBootstrapUserService;
