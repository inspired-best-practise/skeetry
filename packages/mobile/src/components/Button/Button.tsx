import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

import { colors } from '_app/constants';

import { s } from './styles';

export const Button = ({ title }: TButtonProps) => {
  return (
    <TouchableHighlight style={s.button} underlayColor={colors.mainGray} onPress={() => {}}>
      <Text style={s.buttonTitle}>{title}</Text>
    </TouchableHighlight>
  );
};
