import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconBadge from 'react-native-icon-badge';
import {RectButton} from 'react-native-gesture-handler';

export default ({navigation}) => (
  <View style={{flexDirection: 'row', marginRight: 10}}>
    <IconBadge
      MainElement={
        <RectButton onPress={() => navigation.navigate('Cart')}>
          <Icon
            name="shopping-cart"
            size={25}
            color="#FFF"
            style={{margin: 10}}
          />
        </RectButton>
      }
      BadgeElement={<Text style={{color: '#FFFFFF'}}>{3}</Text>}
      IconBadgeStyle={{width: 20, height: 20, backgroundColor: '#7159C1'}}
    />
  </View>
);
