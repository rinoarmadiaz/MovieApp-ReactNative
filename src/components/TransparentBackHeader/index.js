import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import style from './style';

const TransparentBackHeader = props => {
  return (
    <View style={[style.container, props.style]}>
      <TouchableOpacity onPress={props.onPressBack}>
        <Image
          source={require('../../assets/arrow-left.png')}
          style={style.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onPressBookmark}>
        <Image
          source={
            props.isBookmarked
              ? require('../../assets/bookmark-active.png')
              : require('../../assets/bookmark-inactive.png')
          }
          style={style.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TransparentBackHeader;
