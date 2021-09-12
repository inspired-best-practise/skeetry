import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { paragraph } from '_app/constants';
import { navigation } from '_app/services/navigations';
import { withLocalization } from '_app/utils/helpers';

import { s } from './styles';

export const Category = ({ item }: TCategoryProps) => {
  const { name, emoji, locale, localizations } = item;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ItemsByTag', {
          item,
        })
      }
      activeOpacity={0.8}
      style={s.category}
    >
      <View style={s.categoryEmoji}>
        <Text>{emoji}</Text>
      </View>
      <Text style={paragraph}>{withLocalization('name', name, locale, localizations)}</Text>
    </TouchableOpacity>
  );
};
