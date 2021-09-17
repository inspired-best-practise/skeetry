import { StyleSheet } from 'react-native';

import { PLATFORM } from '_app/constants';
import { SCREEN_HEIGHT, SCREEN_WIDTH, STATUS_BAR_HEIGHT } from '_app/utils/dimensions';

const HEADER_HEIGHT = PLATFORM.IS_IOS ? 44 : 56;

export const s = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
  },
  centerContainer: {
    height: SCREEN_HEIGHT - 50 - 40 - STATUS_BAR_HEIGHT - HEADER_HEIGHT,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
