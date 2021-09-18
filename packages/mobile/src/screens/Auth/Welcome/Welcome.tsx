import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { authStore } from '_app/stores';

import { s } from './styles';

export const WelcomeScreen = () => {
  const setLogin = authStore(state => state.setLogin);

  return (
    <View style={s.container}>
      <Text style={{ marginVertical: 20, textAlign: 'center' }}>Welcome to Skeetry</Text>
      <TouchableOpacity
        onPress={() => setLogin()}
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
  );
};
