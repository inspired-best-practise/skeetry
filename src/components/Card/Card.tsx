import { observer } from 'mobx-react';
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SharedElement } from 'react-navigation-shared-element';
import { navigation } from '_app/services/navigations';
import { s } from './styles';

const CardItem = ({ id, title, imageUrl, size }: CardProps) => {
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
      <View style={[size === 'default' ? s.item : s.itemSmall]}>
        <SharedElement id={id}>
          <FastImage
            style={[size === 'default' ? s.itemImage : s.itemImageSmall]}
            source={{ uri: imageUrl, priority: FastImage.priority.normal }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </SharedElement>
        <Text style={s.title}>{title}</Text>
      </View>
    </Pressable>
  );
};

export const Card = observer(CardItem);
