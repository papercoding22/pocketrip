import useSwr from 'swr';

import UserService from '../apis';
import UserServiceInterface from '../apis/interfaces';

const useUserApi = () => {
  const {data, error, isValidating, mutate} = useSwr<UserServiceInterface.User>(
    'user',
    UserService.getUser,
  );

  return {
    data,
    error,
    mutate,
    isValidating,
  };
};

export default useUserApi;
