import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import Carousel from 'react-native-snap-carousel';

import { h4, colors } from '_app/constants';
import { normalize } from '_app/utils/dimensions';

import { itemWidth, s, sliderWidth } from './styles';

export const Nearby = ({ title, data }) => {
  const { t } = useTranslation();

  const renderItem = ({ item, index }) => {
    return (
      <View style={{ position: 'relative', marginVertical: normalize(20) }}>
        <FastImage
          style={s.nearbyImage}
          source={{
            uri: item.illustration,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 280,
            height: 310,
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderRadius: 16,
          }}
        />
        <Text style={[h4, { position: 'absolute', left: 20, top: 20, color: 'white', width: 280 - 40 }]}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <View style={{ marginHorizontal: 20 }}>
        <Text style={[h4, { color: colors.primary600 }]}>{title}</Text>
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
