import {StyleSheet} from 'react-native';
import globalStyle from '../../configs/globalStyle';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 24,
    marginBottom: 24,
    padding: 16,
    borderRadius: 16,
    ...globalStyle.shadow,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: 24,
  },
  image: {
    width: 128,
    height: 128,
    borderRadius: 24,
  },
  titleContainer: {
    marginLeft: 16,
    flex: 1,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  flatListContainer: {
    marginTop: 16,
  },
  flex: {
    flex: 1,
  },
  emptyImage: {
    height: 400,
    width: '100%',
  },
  emptyTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
