import React from 'react';
import {View, Image} from 'react-native';

export default () => (
  <View style={{flexDirection: 'row', marginLeft: 10, marginBottom: 10}}>
    <Image
      source={require('desafio07/src/assets/images/logo.png')}
      style={{
        resizeMode: 'contain',
      }}
    />
  </View>
);
