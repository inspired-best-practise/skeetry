import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { authStore } from '_app/stores';

import { s } from './styles';

export const WelcomeScreen = () => {
  const setLogin = authStore(state => state.setLogin);

  return (
    <View style={s.container}>
      <Text>Welcome!</Text>

      <TouchableOpacity onPress={() => setLogin()} activeOpacity={1}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
