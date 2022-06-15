import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../configs/colors';
import style from './style';

const AppHeader = () => {
  return (
    <View style={style.container}>
      <Icon name="ticket-alt" size={46} color={colors.primary} />
      <Text style={style.title}>{'Movie App'}</Text>
    </View>
  );
};

export default AppHeader;
