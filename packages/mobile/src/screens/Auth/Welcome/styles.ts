import { StyleSheet } from 'react-native';

import { radius, colors, tButton } from '_app/constants';
import { normalize } from '_app/utils/dimensions';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: normalize(20),
  },
  btnLogin: {
    marginTop: normalize(10),
    width: '100%',
    height: normalize(45),
    borderRadius: radius.base,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLoginText: {
    ...tButton,
    color: colors.white,
    fontWeight: '500',
  },
});
