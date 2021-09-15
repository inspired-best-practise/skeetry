import React from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Feather';

import { colors, tTitle } from '_app/constants';
import { normalize } from '_app/utils/dimensions';

import { itemWidth, s, sliderWidth } from './styles';

export const Nearby = ({ title, data }) => {
  const renderItem = ({ item, index }) => {
    return (
      <View style={{ marginVertical: normalize(20) }}>
        <FastImage
          style={s.nearbyImage}
          source={{
            uri: item.illustration,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <Text numberOfLines={1} style={s.itemTitle}>
          {item.title}
        </Text>
        <Text numberOfLines={1} style={s.itemDesc}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <View style={s.main}>
        <Text style={tTitle}>{title}</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Icon name="chevron-right" size={22} color={colors.black} />
        </TouchableOpacity>
      </View>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        activeSlideAlignment={'start'}
        containerCustomStyle={s.slider}
        // contentContainerCustomStyle={s.sliderContentContainer}
        // activeAnimationType={'spring'}
      />
    </View>
  );
};
