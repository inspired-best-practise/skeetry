import { Dimensions, StatusBar, StyleSheet } from 'react-native';
import { CARD_HEIGHT, CARD_SPACING, CARD_WIDTH } from '_app/constants';
import { SCREEN_WIDTH } from '_app/utils/getDimensions';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    width: SCREEN_WIDTH - 40,
    height: CARD_HEIGHT - 20,
    borderRadius: 6,
  },
  itemImage: {
    width: SCREEN_WIDTH - 40,
    height: CARD_WIDTH - 20,
    borderRadius: 6,
  },
  title: {
    paddingVertical: 6 + CARD_SPACING,
    fontSize: 18,
    fontWeight: '600',
  },
  dot: {
    margin: 2,
    fontSize: 10,
    color: 'rgba(255,255,255,.6)',
  },
  dotActive: {
    margin: 2,
    fontSize: 10,
    color: 'rgba(255,255,255,.9)',
  },
  wrapDot: {
    position: 'absolute',
    bottom: 25,
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
