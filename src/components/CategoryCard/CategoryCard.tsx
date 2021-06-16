import React from 'react';
import { View, Text, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
import { s } from './styles';

export const CategoryCard = ({ name, count, image }: CategoryCardProps) => {
  return (
    <Pressable>
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
