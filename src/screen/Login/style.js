import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'tomato',
  },
  image: {
    width: 128,
    height: 128,
  },
  email: {
    borderWidth: 1,
    width: '100%',
    marginTop: 32,
    padding: 8,
    borderRadius: 10,
  },
  password: {
    borderWidth: 1,
    width: '100%',
    marginTop: 16,
    padding: 8,
    borderRadius: 10,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    marginTop: 16,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  textWelcome: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 16,
    color: 'white',
  },
});
