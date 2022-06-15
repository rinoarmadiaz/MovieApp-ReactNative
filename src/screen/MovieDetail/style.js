import {StyleSheet} from 'react-native';
import globalStyle from '../../configs/globalStyle';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  headerContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    top: -24,
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
    padding: 24,
  },
  playButton: {
    position: 'absolute',
    alignSelf: 'center',
    top: -40,
    ...globalStyle.shadow,
  },
  titleText: {fontWeight: 'bold', fontSize: 40, marginTop: 16},
  subtitle: {fontWeight: '600', color: 'gray', marginTop: 16},
  descriptionText: {
    marginTop: 16,
    lineHeight: 30,
    fontSize: 16,
    color: '#454545',
  },
});
