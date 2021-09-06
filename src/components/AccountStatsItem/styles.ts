import { StyleSheet } from 'react-native';

import { normalize } from '_app/utils/dimensions';

export const s = StyleSheet.create({
  item: {
    alignItems: 'center',
  },
  number: {
    color: '#000000',
    fontSize: normalize(16),
    fontWeight: '700',
    marginBottom: normalize(2),
  },
  numberTh: {
    fontSize: normalize(12),
    color: '#777777',
  },
  name: {
    fontSize: normalize(14),
    fontWeight: '700',
    color: '#777777',
  },
});
