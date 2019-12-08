import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconBadge from 'react-native-icon-badge';

import Home from './pages/Home';
import Cart from './pages/Cart';

const HeaderLogo = () => (
  <View style={{flexDirection: 'row', marginLeft: 10, marginBottom: 10}}>
    <Image
      source={require('./assets/images/logo.png')}
      style={{
        resizeMode: 'contain',
      }}
    />
  </View>
);

const HeaderCart = () => (
  <View style={{flexDirection: 'row', marginRight: 10}}>
    <IconBadge
      MainElement={
        <Icon
          name="shopping-cart"
          size={25}
          color="#FFF"
          style={{margin: 10}}
        />
      }
      BadgeElement={<Text style={{color: '#FFFFFF'}}>{3}</Text>}
      IconBadgeStyle={{width: 20, height: 20, backgroundColor: '#7159C1'}}
    />
  </View>
);

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#141419',
        },
        headerTintColor: '#FFF',
        headerLeft: <HeaderLogo />,
        headerRight: <HeaderCart />,
      },
    }
  )
);

export default Routes;
