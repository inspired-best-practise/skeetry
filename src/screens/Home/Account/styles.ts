import { normalize } from '_app/utils/getDimensions';
import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: normalize(20),
  },
  accountHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingBottom: normalize(20),
    marginBottom: normalize(20),
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  name: {
    fontWeight: '700',
    fontSize: normalize(22),
    color: '#000000',
  },
  accountStats: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingBottom: normalize(20),
    marginBottom: normalize(20),
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
});
