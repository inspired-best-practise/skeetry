import { StatusBar, StyleSheet } from 'react-native';
import {
  CARD_HEIGHT,
  CARD_HEIGHT_SMALL,
  CARD_SPACING,
  CARD_SPACING_SMALL,
  CARD_WIDTH,
  CARD_WIDTH_SMALL,
} from '_app/constants';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    marginVertical: CARD_SPACING,
    marginHorizontal: CARD_SPACING,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 6,
  },
  itemSmall: {
    marginVertical: CARD_SPACING_SMALL,
    marginHorizontal: CARD_SPACING_SMALL,
    width: CARD_WIDTH_SMALL,
    height: CARD_HEIGHT_SMALL,
    borderRadius: 6,
  },
  itemImage: {
    width: CARD_WIDTH,
    height: CARD_WIDTH - 20,
    borderRadius: 6,
  },
  itemImageSmall: {
    width: CARD_WIDTH_SMALL,
    height: CARD_WIDTH_SMALL - 20,
    borderRadius: 6,
  },
  title: {
    paddingVertical: 6 + CARD_SPACING,
    fontSize: 18,
    fontWeight: '600',
  },
});
