import { observer } from 'mobx-react';
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import { SharedElement } from 'react-navigation-shared-element';
import { navigation } from '_app/services/navigations';
import { s } from './styles';

const CardItem = ({ item }: CardProps) => {
  const { imageUrl, title, id } = item;

  return (
    <Pressable
      key={item.id}
      onPress={() =>
        navigation.push('CardScreen', {
          item,
        })
      }
    >
      <View style={s.item}>
        <SharedElement id={`item.${id}.image`}>
          <FastImage
            style={s.itemImage}
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
