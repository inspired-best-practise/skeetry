import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { s } from './styles';

export const Button = ({ title }: TButtonProps) => {
  return (
    <TouchableHighlight style={s.button} underlayColor="#DDDDDD" onPress={() => {}}>
      <Text style={s.buttonTitle}>{title}</Text>
    </TouchableHighlight>
  );
};
