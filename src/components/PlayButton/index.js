import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import style from './style';

const PlayButton = props => {
  return (
    <TouchableOpacity
      style={[style.container, props.style]}
      onPress={props.onPress}>
      <Image
        source={require('../../assets/youtube.png')}
        style={style.icon}
        name={'youtube'}
      />
    </TouchableOpacity>
  );
};

export default PlayButton;
