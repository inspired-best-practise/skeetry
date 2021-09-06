import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { navigation } from '_app/services/navigations';

import { s } from './styles';

export const PhoneScreen = () => {
  return (
    <View style={s.container}>
      <Text>Phone</Text>

      <TouchableOpacity onPress={() => navigation.push('Code')} activeOpacity={1}>
        <Text>Next Step</Text>
      </TouchableOpacity>
    </View>
  );
};
