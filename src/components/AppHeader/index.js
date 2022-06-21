import React from 'react';
import {Image, Text, View} from 'react-native';
import colors from '../../configs/colors';
import style from './style';

const AppHeader = () => {
  return (
    <View style={style.container}>
      <Image
        source={require('../../assets/ticket.png')}
        style={style.image}
        color={colors.primary}
      />
      <Text style={style.title}>{'Movie App'}</Text>
    </View>
  );
};

export default AppHeader;
