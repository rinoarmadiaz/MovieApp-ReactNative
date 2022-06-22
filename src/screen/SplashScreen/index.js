import {Text, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import style from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('isLoggedIn').then(value => {
        if (value === 'true') {
          props.navigation.reset({
            index: 0,
            routes: [{name: 'BottomTab'}],
          });
        } else {
          props.navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
          });
        }
      });
    }, 3000);
  }, [props.navigation]);

  return (
    <ImageBackground
      style={style.container}
      source={require('../../assets/splash.jpg')}>
      <Text style={style.text}>Movie App</Text>
    </ImageBackground>
  );
};

export default SplashScreen;
