import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { s } from './styles';

export const ProfileStatsItem = ({ name, number, action }: TProfileStatsItemProps) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={action} style={s.item}>
      <Text style={s.number}>{number}</Text>
      <Text style={s.name}>{name}</Text>
    </TouchableOpacity>
  );
};
