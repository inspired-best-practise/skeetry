import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { navigation } from '_app/services/navigations';

import { s } from './styles';

export const CodeScreen = () => {
  return (
    <View style={s.container}>
      <Text>Code</Text>

      <TouchableOpacity onPress={() => navigation.push('Credentials')} activeOpacity={1}>
        <Text>Next Step</Text>
      </TouchableOpacity>
    </View>
  );
};
