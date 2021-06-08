import { observer } from 'mobx-react';
import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { navigation } from '_app/services/navigations';
import { s } from './styles';

const CardItem = ({ id, title, imageUrl }: CardProps) => {
  return (
    <Pressable
      key={id}
      onPress={() =>
        navigation.push('CardScreen', {
          id,
          imageUrl,
        })
      }
    >
      <View style={s.item}>
        <SharedElement id={id}>
          <Image style={{ width: 100, height: 100 }} source={{ uri: imageUrl }} />
        </SharedElement>
        <Text style={s.title}>{title}</Text>
      </View>
    </Pressable>
  );
};

export const Card = observer(CardItem);
