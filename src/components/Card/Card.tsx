import React, { useState } from 'react';
import { Text, Pressable, View, Animated } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ScrollView } from 'react-native-gesture-handler';
import * as Icon from 'react-native-heroicons/solid';
import { SharedElement } from 'react-navigation-shared-element';

import { navigation } from '_app/services/navigations';

import { s } from './styles';

const AnimatedImage = Animated.createAnimatedComponent(FastImage);

export const Card = ({ item }: TCardProps) => {
  const { images, name, id, rating, flag } = item;
  const [active, setActive] = useState(0);

  const changeItem = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);

      if (slide !== active) {
        setActive(slide);
      }
    }
  };

  return (
    <View key={id}>
      <View style={s.item}>
        <ScrollView
          scrollEventThrottle={6}
          onScroll={({ nativeEvent }) => changeItem(nativeEvent)}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {images ? (
            images.map(i => (
              <Pressable
                key={i.id}
                onPress={() =>
                  navigation.push('CardScreen', {
                    item,
                  })
                }
              >
                <SharedElement id={`item.${id}.image`}>
                  <AnimatedImage
                    style={s.itemImage}
                    source={{ uri: i.src, priority: FastImage.priority.normal }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                </SharedElement>
              </Pressable>
            ))
          ) : (
            <Pressable
              key={'key'}
              onPress={() =>
                navigation.push('CardScreen', {
                  item,
                })
              }
            >
              <SharedElement id={`item.${id}.image`}>
                <AnimatedImage
                  style={s.itemImage}
                  source={{
                    uri: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1299&q=80/250x300',
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </SharedElement>
            </Pressable>
          )}
        </ScrollView>
        <View style={s.wrapDot}>
          {images &&
            images.map((i, index) => (
              <Text key={i.id} style={active === index ? s.dotActive : s.dot}>
                ●
              </Text>
            ))}
        </View>
      </View>
      <View style={s.rating}>
        <Icon.StarIcon size={16} color={'black'} />
        <Text style={s.ratingNumber}>{rating ? rating.number : 0}</Text>
        <Text style={s.ratingCount}>{rating ? rating.count : 0}</Text>
      </View>
      <Text style={s.title}>{flag + ' ' + name}</Text>
    </View>
  );
};
