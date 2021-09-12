import React from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';

import { ModalControl } from '_app/components';
import { paragraph } from '_app/constants';
import { withLocalization } from '_app/utils/helpers';

import { s } from './styles';

// TODO: type route
export const ItemTagDetailScreen = ({ route }) => {
  const { name, emoji, locale, localizations } = route.params.item;

  // TODO: add wrapper for formSheet screens with StatusBar and ModalControl
  return (
    <SafeAreaView style={s.container}>
      <StatusBar barStyle="light-content" animated translucent backgroundColor="rgba(255,255,255,100)" />
      <ModalControl />
      <View>
        <Text>{emoji}</Text>
      </View>
      <Text style={paragraph}>{withLocalization('name', name, locale, localizations)}</Text>
    </SafeAreaView>
  );
};
