import { StyleSheet } from 'react-native';
import { normalize } from '_app/utils/getDimensions';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categories: {
    paddingTop: normalize(18),
    paddingHorizontal: normalize(18),
  },
  categoriesTitle: {
    paddingBottom: normalize(16),
    fontSize: normalize(20),
    fontWeight: '500',
  },
  categoryList: {
    paddingHorizontal: normalize(18),
  },
});
