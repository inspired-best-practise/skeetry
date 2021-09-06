import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { s } from './styles';

export const WelcomeScreen = () => {
  return (
    <View style={s.container}>
      <Text>Welcome!</Text>

      <TouchableOpacity activeOpacity={1}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
