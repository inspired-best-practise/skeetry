import { Dimensions, StyleSheet } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

const wp = percentage => {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
};

const slideWidth = wp(68);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

export const s = StyleSheet.create({
  nearbyImage: {
    height: 160,
    width: 260,
    borderRadius: 12,
  },
  slider: {
    overflow: 'visible',
    paddingHorizontal: 20,
  },
});
