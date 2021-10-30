import { StyleSheet } from 'react-native';

import { colors, radius, tInput } from '_app/constants';
import { normalize } from '_app/utils/dimensions';

export const s = StyleSheet.create({
  inputGroup: {},
  textInputWrapper: {
    position: 'relative',
    width: '100%',
    height: normalize(45),
    backgroundColor: colors.lightGray,
    color: colors.baseGray,
    borderRadius: radius.base,
    marginVertical: normalize(10),
  },
  input: {
    height: '100%',
    width: '100%',
    paddingHorizontal: normalize(15),
    ...tInput,
  },
});
