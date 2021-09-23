import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Feather';

import { colors, tTitle } from '_app/constants';
import { normalize } from '_app/utils/dimensions';

import { Card } from '../Card';
import { itemWidthBase, itemWidthSmall, itemWidthWide, s, sliderWidth } from './styles';

export const HorizontalCardList = ({ title, data, size, handleEndReached }) => {
  const renderItem = ({ item }) => {
    return (
      <View key={item.node.id} style={{ marginVertical: normalize(20) }}>
        <Card item={item.node} size={size} />
      </View>
    );
  };

  let itemWidth = itemWidthBase;

  if (size === 'wide') {
    itemWidth = itemWidthWide;
  }

  if (size === 'small') {
    itemWidth = itemWidthSmall;
  }

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
        onEndReached={() => {
          return handleEndReached();
        }}
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
