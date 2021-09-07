import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerWrap: {
    marginTop: 90,
  },
  contentContainer: {
    flexWrap: 'wrap',
    marginHorizontal: 12,
    width: 800,
  },
  title: {
    color: '#777',
    fontSize: 18,
    fontWeight: '500',
  },
  tag: {
    backgroundColor: '#eee',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 100,
    margin: 6,
  },
});
