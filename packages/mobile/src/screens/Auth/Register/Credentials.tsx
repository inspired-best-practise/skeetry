import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { navigation } from '_app/services/navigations';

import { s } from './styles';

export const CredentialsScreen = () => {
  return (
    <View style={s.container}>
      <Text>Credentials</Text>

      <TouchableOpacity onPress={() => navigation.push('Welcome')} activeOpacity={1}>
        <Text>Next Step</Text>
      </TouchableOpacity>
    </View>
  );
};
