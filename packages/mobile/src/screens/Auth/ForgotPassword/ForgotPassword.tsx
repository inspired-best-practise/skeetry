import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';

import { s } from './styles';

export const ForgotPasswordScreen = () => {
  const { t } = useTranslation();

  return (
    <View style={s.container}>
      <Text>Forgot Password</Text>
    </View>
  );
};
