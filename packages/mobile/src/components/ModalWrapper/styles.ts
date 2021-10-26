import { StyleSheet } from 'react-native';

import { PLATFORM } from '_app/constants';
import { normalize } from '_app/utils/dimensions';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  wrap: {
    marginTop: PLATFORM.IS_IOS ? normalize(33) : normalize(13),
    width: '100%',
  },
});
