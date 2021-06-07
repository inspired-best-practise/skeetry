import { observer } from 'mobx-react';
import React from 'react';
import { View, Text } from 'react-native';
import { s } from '_app/components/LoadingOverlay/styles';

const Login = () => {
  return (
    <View style={s.container}>
      <Text>Login!</Text>
    </View>
  );
};

export const LoginScreen = observer(Login);
