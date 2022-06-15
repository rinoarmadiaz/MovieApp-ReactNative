import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native';
import AppHeader from '../../components/AppHeader';
import ListCard from '../../components/ListCard';

const Bookmark = props => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem('bookmark')
        .then(data => {
          if (data !== null || data !== undefined) {
            console.log('data', data);
            setBookmarkedMovies(JSON.parse(data));
          }
        })
        .catch(error => 'failed to get data :' + error);
    }, []),
  );

  const openMovieDetail = item => {
    console.log('item', item);
    props.navigation.navigate('MovieDetail', {
      movieDetail: item,
    });
  };

  return (
    <SafeAreaView>
      <AppHeader />
      <ListCard data={bookmarkedMovies} onPress={openMovieDetail} />
    </SafeAreaView>
  );
};

export default Bookmark;
