import {Button} from '@ui-kitten/components';
import React from 'react';
import {View, Text} from 'react-native';
import useLogin from './services/users/features/login/useBasicLogin';
import flexStyles from './styles/flex';

const PrivateApp = () => {
  const {logout} = useLogin();
  return (
    <View
      style={[
        flexStyles.flex,
        flexStyles.flex1,
        flexStyles.flexJustifyCenter,
        flexStyles.flexAlignCenter,
      ]}>
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
