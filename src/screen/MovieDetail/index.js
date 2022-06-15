import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
  Linking,
} from 'react-native';
import PlayButton from '../../components/PlayButton';
import TransparentBackHeader from '../../components/TransparentBackHeader';
import style from './style';

const {width: deviceWidth} = Dimensions.get('window');

const MovieDetail = props => {
  const {movieDetail} = props.route.params;
  const [isBookmarked, setIsBookmarked] = useState(false);

  const goBack = () => {
    props.navigation.goBack();
  };

  const bookmark = () => {
    AsyncStorage.getItem('bookmark')
      .then(data => {
        const parsedData = JSON.parse(data);
        console.log('parsedData', parsedData);
        if (parsedData?.length > 0) {
          const result = parsedData.find(item => item.id === movieDetail.id);
          console.log('result', result);
          if (result === undefined) {
            parsedData.push(movieDetail);
            AsyncStorage.setItem('bookmark', JSON.stringify(parsedData))
              .then(_ => setIsBookmarked(true))
              .catch(error => console.log('failed to bookmark 1', error));
            console.log('saving bookmark');
          } else {
            console.log('data already exist, removing bookmark');
            const newData = parsedData.filter(
              item => item.id !== movieDetail.id,
            );
            AsyncStorage.setItem('bookmark', JSON.stringify(newData))
              .then(_ => setIsBookmarked(false))
              .catch(error => console.log('failed to bookmark 1', error));
          }
        } else {
          AsyncStorage.setItem('bookmark', JSON.stringify([movieDetail]))
            .then(_ => setIsBookmarked(true))
            .catch(error => console.log('failed to bookmark 2', error));
        }
      })
      .catch(error => console.log('bookmark error', error));
  };

  const openYoutube = () => {
    if (movieDetail.youtube !== undefined) {
      Linking.openURL(movieDetail.youtube).catch(error =>
        console.log('open youtube failed', error),
      );
    }
  };

  useEffect(() => {
    AsyncStorage.getItem('bookmark')
      .then(data => {
        const parsedData = JSON.parse(data);
        if (parsedData?.length > 0) {
          setIsBookmarked(
            parsedData.findIndex(item => item.id === movieDetail.id) > -1,
          );
        }
      })
      .catch(error => console.log('error', error));
  }, [movieDetail.id]);

  return (
    <ScrollView contentContainerStyle={style.container}>
      <SafeAreaView style={style.headerContainer}>
        <TransparentBackHeader
          onPressBack={goBack}
          onPressBookmark={bookmark}
          isBookmarked={isBookmarked}
        />
      </SafeAreaView>
      <Image
        source={{
          uri: movieDetail?.image,
          width: deviceWidth,
          height: deviceWidth * 1.2,
        }}
      />
      <View style={style.contentContainer}>
        <PlayButton style={style.playButton} onPress={openYoutube} />
        <Text style={style.titleText}>{movieDetail?.title}</Text>
        <Text style={style.subtitle}>{movieDetail?.stars}</Text>
        <Text style={style.subtitle}>{`Year: ${movieDetail?.year}`}</Text>
        <Text style={style.descriptionText}>{movieDetail?.plot}</Text>
      </View>
    </ScrollView>
  );
};

export default MovieDetail;
