import { StatusBar, StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#eeeeee',
    padding: 6,
    marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 6,
  },
  title: {
    paddingVertical: 12,
    paddingHorizontal: 6,
    fontSize: 18,
    fontWeight: '600',
  },
});
