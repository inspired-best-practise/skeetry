import React from 'react';
import { Text, TouchableOpacity, useColorScheme } from 'react-native';

import { whiteColor, darkColor } from '_app/constants';

import { s } from './styles';

export const ProfileStatsItem = ({ name, number, action }: TProfileStatsItemProps) => {
  const theme = useColorScheme();

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={action} style={s.item}>
      <Text style={[s.number, theme === 'dark' ? whiteColor : darkColor]}>{number}</Text>
      <Text style={[s.name, theme === 'dark' ? whiteColor : darkColor]}>{name}</Text>
    </TouchableOpacity>
  );
};
