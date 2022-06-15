import {StyleSheet} from 'react-native';
import colors from '../../configs/colors';

export default StyleSheet.create({
  container: {
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.primary,
    marginLeft: 16,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
