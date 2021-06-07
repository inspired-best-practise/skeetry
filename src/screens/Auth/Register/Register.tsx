import { observer } from 'mobx-react';
import React from 'react';
import { View, Text } from 'react-native';
import { s } from '_app/components/LoadingOverlay/styles';

const Register = () => {
  return (
    <View style={s.container}>
      <Text>Register!</Text>
    </View>
  );
};

export const RegisterScreen = observer(Register);
