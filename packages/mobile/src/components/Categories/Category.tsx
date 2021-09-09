import React from 'react';
import { View, Text } from 'react-native';

import { paragraph } from '_app/constants';

import { s } from './styles';

export const Category = ({ emoji, title }: TCategoryProps) => {
  return (
    <View style={s.category}>
      <View style={s.categoryEmoji}>
        <Text>{emoji}</Text>
      </View>
      <Text style={paragraph}>{title}</Text>
    </View>
  );
};
