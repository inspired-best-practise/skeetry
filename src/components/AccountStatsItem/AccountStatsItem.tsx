import { observer } from 'mobx-react';
import React from 'react';
import { View, Text } from 'react-native';
import { s } from './styles';

const CAccountStatsItem = ({ name, number }: AccountStatsItemProps) => {
  return (
    <View style={s.item}>
      <Text style={s.number}>{number}</Text>
      <Text style={s.name}>{name}</Text>
    </View>
  );
};

export const AccountStatsItem = observer(CAccountStatsItem);
