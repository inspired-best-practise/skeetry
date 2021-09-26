import React from 'react';
import { View, Text } from 'react-native';
import { s } from './styles';

export const Offline = () => {
  return (
    <View style={s.container}>
      <Text style={s.title}>You're Offline</Text>
      <Text style={s.description}>Turn off Airplane Mode or connect to Wi-Fi.</Text>
    </View>
  );
};
