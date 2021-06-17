import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { Text, Pressable, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ScrollView } from 'react-native-gesture-handler';
import { SharedElement } from 'react-navigation-shared-element';
import { navigation } from '_app/services/navigations';
import { s } from './styles';

const CardItem = ({ item }: CardProps) => {
  const { images, title, id } = item;
  const [active, setActive] = useState(images[0].id);

  const change = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      console.log('slide', slide);
      console.log('active', active);

      if (slide !== active) {
        setActive(slide);
      }
    }
  };

  return (
    <View key={id}>
      <Text style={s.title}>{title}</Text>
      <View style={s.item}>
        <ScrollView
          onScroll={({ nativeEvent }) => change(nativeEvent)}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {images.map(i => (
            <Pressable
              key={i.id}
              onPress={() =>
                navigation.push('CardScreen', {
                  item,
                })
              }
            >
              <SharedElement id={`item.${id}.image`}>
                <FastImage
                  style={s.itemImage}
                  source={{ uri: i.src, priority: FastImage.priority.normal }}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </SharedElement>
            </Pressable>
          ))}
        </ScrollView>
        <View style={s.wrapDot}>
          {images.map((i, index) => (
            <Text key={i.id} style={active === index ? s.dotActive : s.dot}>
              ●
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export const Card = observer(CardItem);
