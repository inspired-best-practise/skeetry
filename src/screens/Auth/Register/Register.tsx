import React from 'react';
import { View, Text } from 'react-native';

import { s } from '_app/components/LoadingOverlay/styles';

export const RegisterScreen = () => {
  return (
    <View style={s.container}>
      <Text>Create an account!</Text>

      <Text>Username</Text>
      <Text>Phone</Text>
      <Text>Password</Text>

      <Text>Sign up</Text>
    </View>
  );
};
