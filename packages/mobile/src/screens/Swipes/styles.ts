import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width: '92%',
    height: '70%',
  },
  card: {
    width: '100%',
    height: '100%',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.07,
    shadowRadius: 3.3,
  },
  cardImg: {
    width: '100%',
    height: '100%',
    borderRadius: 13,
  },
});
