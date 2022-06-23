import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, TouchableOpacity} from 'react-native';
import AppHeader from '../../components/AppHeader';
import BannerCard from '../../components/BannerCard';
import MediumCard from '../../components/MediumCard';
import style from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = props => {
  const [mostPopular, setMostPopular] = useState([]);
  const [top250, setTop250] = useState([]);

  const openMovieDetail = item => {
    console.log('item', item);
    props.navigation.navigate('MovieDetail', {
      movieDetail: item,
    });
  };

  const logout = () => {
    AsyncStorage.removeItem('isLoggedIn')
      .then(() => {
        console.log('success logout');
        props.navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
      })
      .catch(error => alert('logout gagal' + error));
  };

  useEffect(() => {
    fetch('https://62a809c7a89585c1770b4c56.mockapi.io/TopMovies')
      .then(response => response.json())
      .then(data => {
        setTop250(data);
        setMostPopular(data);
      })
      .catch(error => console.log('error', error));
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <AppHeader />
      <ScrollView contentContainerStyle={style.scrollContainer}>
        <BannerCard data={mostPopular} onPress={openMovieDetail} />
        <MediumCard
          data={top250}
          style={style.mediumCard}
          onPress={openMovieDetail}
        />
        <TouchableOpacity
          style={style.button}
          onPress={() => {
            logout();
          }}>
          <Text style={style.buttonText}>{'Logout'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
