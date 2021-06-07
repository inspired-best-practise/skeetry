import { observer } from 'mobx-react';
import React from 'react';
import { View, Text } from 'react-native';
import { s } from '_app/components/LoadingOverlay/styles';

const ForgotPassword = () => {
  return (
    <View style={s.container}>
      <Text>ForgotPassword!</Text>
    </View>
  );
};

export const ForgotPasswordScreen = observer(ForgotPassword);
