import { StyleSheet } from 'react-native';

import { normalize } from '_app/utils/dimensions';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    width: '100%',
    paddingHorizontal: normalize(20),
    paddingBottom: normalize(10),
    paddingTop: normalize(5),
  },
  main: {
    paddingBottom: normalize(40),
  },
});
