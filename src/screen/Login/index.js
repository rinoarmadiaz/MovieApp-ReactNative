import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    if (email === 'rinoyo.armadiaz@gmail.com' && password === '12345678') {
      // Login Success
      props.navigation.reset({
        index: 0,
        routes: [{name: 'BottomTab'}],
      });
      AsyncStorage.setItem('isLoggedIn', 'true');
    } else {
      // Login Failed
      alert('username atau password salah');
    }
  };

  return (
    <View style={style.container}>
      <Image style={style.image} source={require('../../assets/ticket.png')} />
      <Text style={style.textWelcome}>{'Selamat Datang'}</Text>
      <TextInput
        style={style.email}
        placeholder="Email"
        keyboardType="email-address"
        textContentType="emailAddress"
        value={email}
        onChangeText={value => {
          setEmail(value);
        }}
      />
      <TextInput
        style={style.password}
        placeholder="Password"
        textContentType="password"
        secureTextEntry={true}
        value={password}
        onChangeText={value => {
          setPassword(value);
        }}
      />
      <TouchableOpacity
        style={style.button}
        onPress={() => {
          onLogin();
        }}>
        <Text style={style.buttonText}>{'Login'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
