import { StyleSheet } from 'react-native';

import { colors, radius } from '_app/constants';

export const s = StyleSheet.create({
  imagePlaceholder: {
    backgroundColor: colors.mainGray,
    borderRadius: radius.base,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
