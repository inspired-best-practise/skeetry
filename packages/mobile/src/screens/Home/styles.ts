import { StyleSheet } from 'react-native';

import { normalize } from '_app/utils/dimensions';

export const s = StyleSheet.create({
  header: {
    display: 'flex',
    width: '100%',
    paddingHorizontal: normalize(12),
    paddingBottom: normalize(10),
    paddingTop: normalize(5),
  },
  main: {
    paddingBottom: normalize(20),
  },
});
