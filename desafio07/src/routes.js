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
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      cardStyle: {
        backgroundColor: '#191920',
      },
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
