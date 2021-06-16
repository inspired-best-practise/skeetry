import { normalize } from '_app/utils/getDimensions';
import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  card: {
    width: '100%',
    paddingTop: normalize(18),
    position: 'relative',
    borderRadius: 6,
  },
  cardInfo: {
    position: 'absolute',
    bottom: 6,
    left: 6,
    right: 6,
    zIndex: 10,
    padding: 6,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    width: normalize(200),
  },
  cardName: {
    fontWeight: '600',
    fontSize: normalize(18),
    paddingBottom: normalize(6),
  },
  cardCount: {
    fontWeight: '500',
  },
  cardImage: {
    width: '100%',
    height: normalize(200),
    borderRadius: 6,
  },
});
