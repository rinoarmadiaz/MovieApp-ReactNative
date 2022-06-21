import {StyleSheet} from 'react-native';
import colors from '../../configs/colors';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
  title: {
    color: colors.primary,
    marginLeft: 16,
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {width: 72, height: 62},
});
