import { observer } from 'mobx-react';
import React from 'react';
import { View, Text } from 'react-native';
import { s } from './styles';

const CardItem = ({ title }: CardProps) => {
  return (
    <View style={s.item}>
      <Text style={s.title}>{title}</Text>
    </View>
  );
};

export const Card = observer(CardItem);
