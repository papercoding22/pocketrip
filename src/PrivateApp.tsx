import {Button} from '@ui-kitten/components';
import React from 'react';
import {View, Text} from 'react-native';
import useLogin from './services/users/features/login/useBasicLogin';

const PrivateApp = () => {
  const {logout} = useLogin();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        onPress={() => {
          logout();
        }}>
        Logout
      </Button>
    </View>
  );
};

export default PrivateApp;
