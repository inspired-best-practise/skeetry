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
    backgroundColor: 'lightgrey',
    padding: 20,
    marginVertical: CARD_SPACING,
    marginHorizontal: CARD_SPACING,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 4,
  },
  itemSmall: {
    backgroundColor: 'lightgrey',
    padding: 20,
    marginVertical: CARD_SPACING_SMALL,
    marginHorizontal: CARD_SPACING_SMALL,
    width: CARD_WIDTH_SMALL,
    height: CARD_HEIGHT_SMALL,
    borderRadius: 4,
  },
  title: {
    fontSize: 32,
  },
});
