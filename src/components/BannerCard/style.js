import {Dimensions, StyleSheet} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

export default StyleSheet.create({
  itemContainer: {
    width: screenWidth,
  },
  imageContainer: {
    width: '90%',
    aspectRatio: 0.9,
    alignSelf: 'center',
    borderRadius: 32,
    marginTop: 16,
  },
  recentTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginHorizontal: 24,
  },
  itemTitle: {
    marginTop: 12,
    fontWeight: 'bold',
    fontSize: 24,
    flex: 1,
    marginHorizontal: 24,
  },
  itemCategory: {
    fontWeight: '600',
    color: 'gray',
    marginHorizontal: 24,
  },
});
