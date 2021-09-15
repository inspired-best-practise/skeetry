import { Dimensions, StatusBar, StyleSheet } from 'react-native';

import { CARD_HEIGHT, CARD_SPACING, colors, radius, tBase, tSmallRegular } from '_app/constants';
import { normalize, SCREEN_WIDTH } from '_app/utils/dimensions';

const itemBaseWidth = Dimensions.get('window').width / 2 - 30;

export const s = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: colors.mainGray,
    borderRadius: radius.base,
  },
  itemImage: {
    borderRadius: radius.base,
  },
  itemSizeFull: {
    width: SCREEN_WIDTH - 40,
    height: CARD_HEIGHT - 20,
  },
  itemSizeWide: {
    height: normalize(150),
    width: normalize(240),
  },
  itemSizeBase: {
    height: itemBaseWidth - 10,
    width: itemBaseWidth,
  },
  itemSizeSmall: {
    height: normalize(110),
    width: normalize(115),
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
  itemTitle: {
    marginTop: normalize(10),
    width: normalize(240 - 40),
    ...tBase,
  },
  itemDesc: {
    marginTop: normalize(2),
    width: normalize(240),
    ...tSmallRegular,
  },
});
