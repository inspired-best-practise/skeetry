import React from 'react';
import { View, Text } from 'react-native';

import { paragraph } from '_app/constants';
import { withLocalization } from '_app/utils/helpers';

import { s } from './styles';

export const Category = ({ item }: TCategoryProps) => {
  const { name, emoji, locale, localizations } = item;

  return (
    <View style={s.category}>
      <View style={s.categoryEmoji}>
        <Text>{emoji}</Text>
      </View>
      <Text style={paragraph}>{withLocalization('name', name, locale, localizations)}</Text>
    </View>
  );
};
