import { Dimensions, StyleSheet } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

const wp = percentage => {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
};

const slideWidth = wp(74);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

export const s = StyleSheet.create({
  nearbyImage: {
    height: 310,
    width: 280,
    borderRadius: 16,
  },
  slider: {
    marginTop: 10,
    overflow: 'visible',
    paddingHorizontal: 20,
  },

  sliderContentContainer: {
    paddingVertical: 5,
  },
});
