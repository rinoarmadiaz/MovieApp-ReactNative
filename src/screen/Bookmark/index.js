import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import AppHeader from '../../components/AppHeader';
import ListCard from '../../components/ListCard';
import style from './style';

const Bookmark = props => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
  const [fullBookmarkedMovies, setFullBookmarkedMovies] = useState([]);

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem('bookmark')
        .then(data => {
          if (data !== null || data !== undefined) {
            console.log('data', data);
            setBookmarkedMovies(JSON.parse(data));
            setFullBookmarkedMovies(JSON.parse(data));
          }
        })
        .catch(error => console.log('failed to get data :' + error));
    }, []),
  );

  const openMovieDetail = item => {
    console.log('item', item);
    props.navigation.navigate('MovieDetail', {
      movieDetail: item,
    });
  };

  const onSearch = text => {
    console.log('text to search', text);
    if (text === '') {
      // restore the search
      AsyncStorage.getItem('bookmark')
        .then(data => {
          if (data !== null || data !== undefined) {
            console.log('data', data);
            setBookmarkedMovies(JSON.parse(data));
            setFullBookmarkedMovies(JSON.parse(data));
          }
        })
        .catch(error => console.log('failed to get data :' + error));
    } else {
      // try to search
      const searchedData = [];
      fullBookmarkedMovies.forEach(item => {
        if (item.title.toLowerCase().includes(text)) {
          searchedData.push(item);
        }
      });
      setBookmarkedMovies(searchedData);
    }
  };

  return (
    <SafeAreaView>
      <AppHeader />
      <TextInput
        style={style.textInput}
        placeholder={'Search Bookmark'}
        onChangeText={text => onSearch(text)}
      />
      <ListCard data={bookmarkedMovies} onPress={openMovieDetail} />
    </SafeAreaView>
  );
};

export default Bookmark;
