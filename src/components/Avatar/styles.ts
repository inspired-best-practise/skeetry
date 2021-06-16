import { normalize } from '_app/utils/getDimensions';
import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  avatarImage: {
    width: normalize(70),
    height: normalize(70),
    borderRadius: 100,
  },
});
