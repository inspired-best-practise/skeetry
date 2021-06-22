import { normalize } from '_app/utils/getDimensions';
import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: normalize(20),
  },
  title: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    marginVertical: 18,
  },
  description: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 18,
    color: '#777777',
  },
  terms: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 20,
    color: '#777777',
  },
});
