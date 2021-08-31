import { StyleSheet } from 'react-native';

import { normalize, SCREEN_WIDTH } from '_app/utils/getDimensions';

const itemWidth = SCREEN_WIDTH / 2 - 20;

export const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: normalize(20),
    paddingBottom: 80,
  },
  accountPanel: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingBottom: normalize(10),
    marginBottom: normalize(10),
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
    paddingHorizontal: normalize(20),
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
    paddingHorizontal: normalize(20),
  },
  card: {
    minWidth: itemWidth,
    maxWidth: itemWidth,
    marginVertical: 6,
    marginHorizontal: 6,
  },
  cardList: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  cardImage: {
    width: itemWidth,
    height: 150,
    borderRadius: 6,
  },
});
