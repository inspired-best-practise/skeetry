import { StatusBar, StyleSheet } from 'react-native';

import { CARD_HEIGHT, CARD_SPACING } from '_app/constants';
import { SCREEN_WIDTH } from '_app/utils/getDimensions';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#ddd',
    width: SCREEN_WIDTH - 40,
    height: CARD_HEIGHT - 20,
    borderRadius: 6,
  },
  itemImage: {
    width: SCREEN_WIDTH - 40,
    height: CARD_HEIGHT - 20,
    borderRadius: 6,
  },
  focalPoint: {
    ...StyleSheet.absoluteFillObject,
    width: 20,
    height: 20,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  title: {
    paddingTop: 4 + CARD_SPACING,
    paddingBottom: 18 + CARD_SPACING,
    fontSize: 18,
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
    bottom: 10,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  rating: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 12,
    alignItems: 'flex-start',
  },
  ratingNumber: {
    marginHorizontal: 2,
  },
  ratingCount: {
    color: '#777',
  },
});
