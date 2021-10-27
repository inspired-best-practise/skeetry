import { StyleSheet } from 'react-native';

import { colors, radius } from '_app/constants';

export const s = StyleSheet.create({
  button: {
    backgroundColor: colors.mainGray,
    borderRadius: radius.s,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  small: {
    paddingVertical: 10,
  },
  buttonTitle: {
    textAlign: 'center',
  },
});
