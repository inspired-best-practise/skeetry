import React from 'react';
import { View, Text, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import { navigation } from '_app/services/navigations';
import { s } from './styles';

export const CategoryCard = ({ name, count, image, stack, screen }: TCategoryCardProps) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate(stack, { screen });
      }}
    >
      <View style={s.card}>
        <View style={s.cardInfo}>
          <Text style={s.cardName}>{name}</Text>
          <Text style={s.cardCount}>{count}</Text>
        </View>

        <FastImage
          style={s.cardImage}
          source={{
            uri: image,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
    </Pressable>
  );
};
