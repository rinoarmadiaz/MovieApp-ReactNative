import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/Home';
import Bookmark from '../screen/Bookmark';
import MovieDetail from '../screen/MovieDetail';
import Icon from 'react-native-vector-icons/FontAwesome5';

const StackNavigator = createNativeStackNavigator();

const BottomTab = createBottomTabNavigator();

const BottomTabContainer = () => (
  <BottomTab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'film';
        } else if (route.name === 'Bookmark') {
          iconName = 'bookmark';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />;
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
      name={'BottomTab'}
      component={BottomTabContainer}
    />
    <StackNavigator.Screen
      options={{headerShown: false}}
      name={'MovieDetail'}
      component={MovieDetail}
    />
  </StackNavigator.Navigator>
);
