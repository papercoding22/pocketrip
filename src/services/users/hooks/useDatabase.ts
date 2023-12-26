import {MMKVLoader, useMMKVStorage} from 'react-native-mmkv-storage';

const storage = new MMKVLoader().withInstanceID('user-service').initialize();

const useDatabase = () => {
  const [accessToken, storeAccessToken] = useMMKVStorage<string | null>(
    'accessToken',
    storage,
    null,
  );
  const [refreshToken, storeRefreshToken] = useMMKVStorage<string | null>(
    'refreshToken',
    storage,
    null,
  );

  return {
    accessToken,
    storeAccessToken,
    refreshToken,
    storeRefreshToken,
  };
};

export default useDatabase;
