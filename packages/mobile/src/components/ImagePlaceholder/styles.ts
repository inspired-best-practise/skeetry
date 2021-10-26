import { StyleSheet } from 'react-native';

import { radius } from '_app/constants';

export const s = StyleSheet.create({
  imagePlaceholder: {
    borderRadius: radius.base,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
