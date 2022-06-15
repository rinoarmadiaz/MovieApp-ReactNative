import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import style from './style';

const PlayButton = props => {
  return (
    <TouchableOpacity
      style={[style.container, props.style]}
      onPress={props.onPress}>
      <Icon size={32} name={'youtube'} />
    </TouchableOpacity>
  );
};

export default PlayButton;
