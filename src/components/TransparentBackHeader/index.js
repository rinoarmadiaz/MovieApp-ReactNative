import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import style from './style';

const TransparentBackHeader = props => {
  return (
    <View style={[style.container, props.style]}>
      <TouchableOpacity onPress={props.onPressBack}>
        <Icon size={28} name={'arrow-left'} color={'white'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onPressBookmark}>
        <Icon
          size={28}
          solid={props.isBookmarked}
          name={'bookmark'}
          color={'white'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TransparentBackHeader;
