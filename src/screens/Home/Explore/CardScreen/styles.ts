import { WelcomeScreen } from './../../../Auth/Welcome/Welcome';
import { SCREEN_WIDTH } from '_app/utils/getDimensions';
import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemImage: {
    width: SCREEN_WIDTH,
    height: 300,
    borderRadius: 6,
  },
  title: {
    fontSize: 32,
    lineHeight: 36,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 18,
    overflow: 'hidden',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  detailText: {
    fontSize: 14,
    color: 'grey',
    marginLeft: 4,
    marginRight: 16,
  },
  smallDivider: {
    height: 1,
    backgroundColor: '#DCDDDE',
    marginVertical: 16,
    width: width * 0.25,
  },
  divider: {
    height: 1,
    backgroundColor: '#DCDDDE',
    marginVertical: 16,
  },
  host: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 76,
    height: 76,
    borderRadius: 76 / 2,
  },
  mediumText: {
    fontSize: 16,
    lineHeight: 18,
  },

  content: {
    padding: 20,
  },
  section: {
    paddingBottom: 20,
    borderColor: '#eee',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 6,
  },
  sectionMainText: {
    fontWeight: '500',
  },
  name: {
    fontSize: 24,
    fontWeight: '500',
  },
  rating: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 12,
    alignItems: 'flex-start',
  },
  ratingNumber: {
    marginHorizontal: 2,
  },
  ratingCount: {
    color: '#777',
  },
});
