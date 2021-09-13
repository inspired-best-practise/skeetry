import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Feather';

import { h4, colors, paragraph } from '_app/constants';
import { normalize } from '_app/utils/dimensions';

import { itemWidth, s, sliderWidth } from './styles';

export const Nearby = ({ title, data }) => {
  const { t } = useTranslation();

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
        <Text style={[paragraph, { marginTop: 10, width: 280 - 40, color: colors.gray800, fontWeight: '600' }]}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <View
        style={{
          marginHorizontal: 20,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={[h4, { color: colors.primary600 }]}>{title}</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Icon name="chevron-right" size={22} color={colors.primary600} />
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
