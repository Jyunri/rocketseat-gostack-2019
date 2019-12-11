import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import React from 'react';

import HeaderLogo from 'desafio07/src/components/Header/HeaderLogo';
import HeaderCart from 'desafio07/src/components/Header/HeaderCart';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
      HeaderCart,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      cardStyle: {
        backgroundColor: '#191920',
      },
      defaultNavigationOptions: ({navigation}) => ({
        headerStyle: {
          backgroundColor: '#141419',
        },
        headerTintColor: '#FFF',
        headerLeft: <HeaderLogo navigation={navigation} />,
        headerRight: <HeaderCart navigation={navigation} />,
      }),
    }
  )
);

export default Routes;
