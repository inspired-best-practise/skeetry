import { StyleSheet } from 'react-native';

import { colors } from '_app/constants';
import { normalize } from '_app/utils/dimensions';

export const s = StyleSheet.create({
  categoryWrapper: {
    marginVertical: normalize(10),
    marginHorizontal: normalize(14),
    paddingRight: normalize(20),
  },
  category: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary100,
    padding: normalize(12),
    borderRadius: 14,
    margin: normalize(6),
    minWidth: normalize(150),
  },
  categoryEmoji: {
    backgroundColor: colors.primary200,
    borderRadius: 10,
    padding: normalize(12),
    marginRight: normalize(10),
  },
});
