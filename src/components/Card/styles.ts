import { StatusBar, StyleSheet } from 'react-native';
import { CARD_HEIGHT, CARD_SPACING, CARD_WIDTH } from '_app/constants';
import { SCREEN_WIDTH } from '_app/utils/getDimensions';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    marginVertical: CARD_SPACING,
    width: '100%',
    height: CARD_HEIGHT,
    borderRadius: 6,
  },
  itemImage: {
    width: '100%',
    height: CARD_WIDTH - 20,
    borderRadius: 6,
  },
  title: {
    paddingVertical: 6 + CARD_SPACING,
    fontSize: 18,
    fontWeight: '600',
  },
});
