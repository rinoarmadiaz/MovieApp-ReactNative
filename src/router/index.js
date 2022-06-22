import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/Home';
import Bookmark from '../screen/Bookmark';
import MovieDetail from '../screen/MovieDetail';
import {Image} from 'react-native';
import styles from './styles';
import SplashScreen from '../screen/SplashScreen';
import Login from '../screen/Login';

const StackNavigator = createNativeStackNavigator();

const BottomTab = createBottomTabNavigator();

const BottomTabContainer = () => (
  <BottomTab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({size, focused}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? require('../assets/movie-active.png')
            : require('../assets/movie-inactive.png');
        } else if (route.name === 'Bookmark') {
          iconName = focused
            ? require('../assets/bookmark-active.png')
            : require('../assets/bookmark-inactive.png');
        }
        return <Image source={iconName} style={styles.icon} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        borderTopStartRadius: 24,
        borderTopEndRadius: 24,
        position: 'absolute',
      },
    })}>
    <BottomTab.Screen
      options={{
        headerShown: false,
      }}
      name={'Home'}
      component={Home}
    />
    <BottomTab.Screen
      options={{headerShown: false}}
      name={'Bookmark'}
      component={Bookmark}
    />
  </BottomTab.Navigator>
);

export default () => (
  <StackNavigator.Navigator>
    <StackNavigator.Screen
      options={{headerShown: false}}
      name={'SplashScreen'}
      component={SplashScreen}
    />
    <StackNavigator.Screen
      options={{headerShown: false}}
      name={'BottomTab'}
      component={BottomTabContainer}
    />
    <StackNavigator.Screen
      options={{headerShown: false}}
      name={'MovieDetail'}
      component={MovieDetail}
    />
    <StackNavigator.Screen
      options={{headerShown: false}}
      name={'Login'}
      component={Login}
    />
  </StackNavigator.Navigator>
);
