import { StyleSheet } from 'react-native';

import { colors } from '_app/constants';
import { normalize } from '_app/utils/dimensions';

export const s = StyleSheet.create({
  story: {
    height: normalize(82),
    width: normalize(82),
    marginHorizontal: normalize(6),
    borderRadius: normalize(26),
    borderColor: colors.primary300,
    borderWidth: 2,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  storyImage: {
    height: normalize(70),
    width: normalize(70),
    borderRadius: normalize(20),
  },
});
