import { StatusBar, StyleSheet } from 'react-native';
import { CARD_SPACING, CARD_WIDTH } from '_app/constants';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'lightgrey',
    padding: 20,
    marginVertical: CARD_SPACING,
    marginHorizontal: CARD_SPACING,
    width: CARD_WIDTH,
    height: 300,
    borderRadius: 4,
  },
  title: {
    fontSize: 32,
  },
});
