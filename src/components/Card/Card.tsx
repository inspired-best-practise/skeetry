import { observer } from 'mobx-react';
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import FastImage from 'react-native-fast-image';
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
          <FastImage
            style={{ width: 100, height: 100 }}
            source={{ uri: imageUrl, priority: FastImage.priority.normal }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </SharedElement>
        <Text style={s.title}>{title}</Text>
      </View>
    </Pressable>
  );
};

export const Card = observer(CardItem);
