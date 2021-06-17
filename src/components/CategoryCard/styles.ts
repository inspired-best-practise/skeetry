import { normalize } from '_app/utils/getDimensions';
import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  card: {
    width: '100%',
    paddingTop: normalize(20),
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
    borderRadius: 4,
    width: normalize(200),
  },
  cardName: {
    fontWeight: '700',
    fontSize: normalize(24),
    paddingBottom: normalize(6),
    color: '#ffffff',
  },
  cardCount: {
    fontWeight: '600',
    color: '#ffffff',
    fontSize: normalize(20),
  },
  cardImage: {
    width: '100%',
    height: normalize(200),
    borderRadius: 6,
  },
});
