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
    fontSize: normalize(18),
    fontWeight: '600',
  },
  categoryList: {
    paddingHorizontal: normalize(18),
  },
});
