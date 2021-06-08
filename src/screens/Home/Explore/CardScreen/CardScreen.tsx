import { observer } from 'mobx-react';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { s } from './styles';

const CardDetailScreen = ({ route, navigation }) => {
  const { id, imageUrl } = route.params;
  return (
    <View style={s.container}>
      <Text>Card Detail!</Text>
      <SharedElement id={id}>
        <Image style={{ width: 100, height: 100 }} source={{ uri: imageUrl }} />
      </SharedElement>
      <Text onPress={() => navigation.goBack()}>Back</Text>
    </View>
  );
};
export const CardScreen = observer(CardDetailScreen);
