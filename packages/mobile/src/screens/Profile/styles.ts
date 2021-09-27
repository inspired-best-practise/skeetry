import { StyleSheet } from 'react-native';

import { colors, radius } from '_app/constants';
import { normalize, SCREEN_WIDTH } from '_app/utils/dimensions';

export const itemWidth = SCREEN_WIDTH / 2 - 20;

export const s = StyleSheet.create({
  headerArea: {
    height: normalize(50),
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    // paddingHorizontal: normalize(20),
    paddingBottom: normalize(80),
  },
  profilePanel: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingBottom: normalize(10),
    marginBottom: normalize(10),
    paddingHorizontal: normalize(20),
  },
  profileHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingBottom: normalize(20),
    marginBottom: normalize(20),
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingHorizontal: normalize(20),
  },
  name: {
    fontWeight: '700',
    fontSize: normalize(22),
    color: '#000000',
  },
  profileStats: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingBottom: normalize(20),
    marginBottom: normalize(20),
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingHorizontal: normalize(20),
  },
  card: {
    minWidth: itemWidth,
    maxWidth: itemWidth,
    marginVertical: normalize(6),
    marginHorizontal: normalize(6),
    position: 'relative',
  },
  cardImage: {
    width: itemWidth,
    height: normalize(150),
    borderRadius: radius.base,
  },
  containerWrap: {
    marginTop: normalize(40),
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: normalize(20),
  },
  listWrapper: {
    justifyContent: 'space-between',
    marginHorizontal: normalize(20),
    marginBottom: normalize(60),
  },
});
