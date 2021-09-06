import React from 'react';
import { View, Text } from 'react-native';

import { s } from './styles';

export const AccountStatsItem = ({ name, number }: TAccountStatsItemProps) => {
  return (
    <View style={s.item}>
      <Text style={s.number}>{number}</Text>
      <Text style={s.name}>{name}</Text>
    </View>
  );
};
