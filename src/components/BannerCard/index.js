import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import style from './style';

const BannerCard = props => {
  const renderItem = ({item}) => {
    return (
      <View style={style.itemContainer}>
        <TouchableOpacity onPress={() => props.onPress(item)}>
          <Image
            source={{uri: item.image}}
            style={style.imageContainer}
            resizeMode={'cover'}
          />
        </TouchableOpacity>
        <Text style={style.itemTitle}>{item.title}</Text>
        <Text style={style.itemCategory}>{item.crew}</Text>
      </View>
    );
  };

  return (
    <View>
      <Text style={style.recentTitle}>{'Most Popular'}</Text>
      <FlatList
        horizontal={true}
        data={props.data}
        renderItem={renderItem}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default BannerCard;
