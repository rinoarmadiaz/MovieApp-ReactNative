import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import style from './style';

const ListCard = props => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => props.onPress(item)}
      style={style.container}>
      <Image
        style={style.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={style.titleContainer}>
        <Text style={style.itemTitle}>{item.title}</Text>
        <Text numberOfLines={6}>{item.plot}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={style.title}>{'Your Bookmark'}</Text>
      <FlatList
        contentContainerStyle={style.flatListContainer}
        data={props.data}
        renderItem={renderItem}
        ListEmptyComponent={
          <View style={style.flex}>
            <Image
              resizeMode={'contain'}
              style={style.emptyImage}
              source={require('../../assets/oops.png')}
            />
            <Text style={style.emptyTitle}>
              {"you don't have bookmarked movies"}
            </Text>
          </View>
        }
      />
    </View>
  );
};

export default ListCard;
