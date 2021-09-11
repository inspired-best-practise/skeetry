import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { s } from './styles';

export const AccountStatsItem = ({ name, number, action }: TAccountStatsItemProps) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={action} style={s.item}>
      <Text style={s.number}>{number}</Text>
      <Text style={s.name}>{name}</Text>
    </TouchableOpacity>
  );
};
