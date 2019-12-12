import React, {Component} from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {formatPrice} from '../../util/format';
import api from '../../services/api';
import {
  ProductList,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddToCartButton,
  AddToCartButtonText,
  AddToCartCounter,
} from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    this.setState({products: response.data});
  }

  handleAddProduct = product => {
    const {dispatch} = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  renderItem = item => {
    return (
      <Product>
        <ProductImage source={{uri: item.image}} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{formatPrice(item.price)}</ProductPrice>
        <AddToCartButton onPress={() => this.handleAddProduct(item)}>
          <AddToCartCounter>
            <Icon name="shopping-cart" size={25} color="#FFF" />
            <Text style={{color: '#FFF'}}>1</Text>
          </AddToCartCounter>
          <AddToCartButtonText>ADICIONAR</AddToCartButtonText>
        </AddToCartButton>
      </Product>
    );
  };

  render() {
    const {products} = this.state;

    return (
      <ProductList
        data={products}
        keyExtractor={product => product.id}
        renderItem={({item}) => this.renderItem(item)}
        horizontal
      />
    );
  }
}

export default connect()(Home);
