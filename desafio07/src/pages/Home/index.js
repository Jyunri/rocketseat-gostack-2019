import React, {Component} from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import api from '../../services/api';
import {formatPrice} from '../../util/format';
import {
  AddToCartButton,
  AddToCartButtonText,
  AddToCartCounter,
  Product,
  ProductImage,
  ProductList,
  ProductPrice,
  ProductTitle,
} from './styles';
import * as CartActions from '../../store/modules/cart/actions';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    this.setState({products: response.data});
  }

  handleAddProduct = product => {
    const {addToCart} = this.props;

    addToCart(product);
  };

  renderItem = item => {
    const {amount} = this.props;

    return (
      <Product>
        <ProductImage source={{uri: item.image}} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{formatPrice(item.price)}</ProductPrice>
        <AddToCartButton onPress={() => this.handleAddProduct(item)}>
          <AddToCartCounter>
            <Icon name="shopping-cart" size={25} color="#FFF" />
            <Text style={{color: '#FFF'}}>{amount[item.id] || 0}</Text>
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

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
