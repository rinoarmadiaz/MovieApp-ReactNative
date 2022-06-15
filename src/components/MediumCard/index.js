import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import style from './style';

const MediumCard = props => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={style.itemContainer}
      onPress={() => props.onPress(item)}>
      <Image style={style.itemImage} source={{uri: item.image}} />
    </TouchableOpacity>
  );

  return (
    <View style={props.style}>
      <Text style={style.recentTitle}>For You</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={props.data}
        renderItem={renderItem}
        contentContainerStyle={style.contentContainer}
      />
    </View>
  );
};

export default MediumCard;
