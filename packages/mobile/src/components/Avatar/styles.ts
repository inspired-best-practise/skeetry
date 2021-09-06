import { StyleSheet } from 'react-native';

import { normalize } from '_app/utils/dimensions';

export const s = StyleSheet.create({
  avatarImage: {
    width: normalize(70),
    height: normalize(70),
    borderRadius: 100,
  },
});
