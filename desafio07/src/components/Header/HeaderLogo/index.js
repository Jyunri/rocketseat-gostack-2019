import React from 'react';
import {Image} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export default ({navigation}) => (
  <RectButton
    style={{flexDirection: 'row', marginLeft: 10, marginBottom: 10}}
    onPress={() => navigation.navigate('Home')}>
    <Image
      source={require('desafio07/src/assets/images/logo.png')}
      style={{
        resizeMode: 'contain',
      }}
    />
  </RectButton>
);
