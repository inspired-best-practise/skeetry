import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { s } from './styles';

export const WelcomeScreen = () => {
  return (
    <View style={s.container}>
      <View style={s.loginForm}>
        <Text style={{ marginVertical: 20, textAlign: 'center' }}>Welcome to Skeetry</Text>
        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.6}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...s.btnLogin,
            opacity: 1,
          }}
        >
          <Text style={s.btnLoginText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
