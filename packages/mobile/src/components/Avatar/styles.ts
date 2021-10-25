import { StyleSheet } from 'react-native';

import { normalize } from '_app/utils/dimensions';

export const s = StyleSheet.create({
  avatarImage: {
    width: normalize(60),
    height: normalize(60),
    borderRadius: 100,
  },
});
