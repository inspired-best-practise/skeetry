import { StyleSheet } from 'react-native';

import { colors } from '_app/constants';

export const s = StyleSheet.create({
  button: {
    backgroundColor: colors.mainGray,
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginVertical: 6,
    minWidth: 260,
    height: 40,
  },
  buttonTitle: {
    textAlign: 'center',
  },
});
