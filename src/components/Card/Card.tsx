import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { Text, Pressable, View, Animated } from 'react-native';
import FastImage from 'react-native-fast-image';
import { ScrollView } from 'react-native-gesture-handler';
import * as Icon from 'react-native-heroicons/solid';
import { SharedElement } from 'react-navigation-shared-element';
import { navigation } from '_app/services/navigations';
import { s } from './styles';

const AnimatedImage = Animated.createAnimatedComponent(FastImage);

const CardItem = ({ item }: CardProps) => {
  const { images, title, id, rating, flag } = item;
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
                <AnimatedImage
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
      <View style={s.rating}>
        <Icon.StarIcon size={16} color={'black'} />
        <Text style={s.ratingNumber}>{rating.number}</Text>
        <Text style={s.ratingCount}>({rating.count})</Text>
      </View>
      <Text style={s.title}>{flag + ' ' + title}</Text>
    </View>
  );
};

export const Card = observer(CardItem);
