import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import { paragraph } from '_app/constants';
import { withLocalization } from '_app/utils/helpers';

import { s } from './styles';

// TODO: type route
export const ItemTagDetailScreen = ({ route }) => {
  const { name, emoji, locale, localizations } = route.params.item;

  return (
    <SafeAreaView style={s.container}>
      <View>
        <Text>{emoji}</Text>
      </View>
      <Text style={paragraph}>{withLocalization('name', name, locale, localizations)}</Text>
    </SafeAreaView>
  );
};
