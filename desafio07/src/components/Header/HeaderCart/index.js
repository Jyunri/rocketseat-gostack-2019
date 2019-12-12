import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconBadge from 'react-native-icon-badge';
import {RectButton} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

function Header({navigation, cart}) {
  return (
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
        BadgeElement={<Text style={{color: '#FFFFFF'}}>{cart.length}</Text>}
        IconBadgeStyle={{width: 20, height: 20, backgroundColor: '#7159C1'}}
      />
    </View>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Header);
