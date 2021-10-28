import { StyleSheet } from 'react-native';

import { normalize, SCREEN_WIDTH } from '_app/utils/dimensions';

export const s = StyleSheet.create({
  container: { position: 'relative' },
  image: {
    width: SCREEN_WIDTH,
    height: normalize(380),
  },
  pager: {
    position: 'absolute',
    bottom: normalize(20),
    right: normalize(20),
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 4,
    paddingHorizontal: normalize(12),
    padding: normalize(6),
  },
});
