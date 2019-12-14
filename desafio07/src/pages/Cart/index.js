import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  EmptyCartText,
  ProductList,
  Product,
  ProductSKU,
  ProductImage,
  ProductDescription,
  ProductTitle,
  ProductPriceContainer,
  ProductPrice,
  ProductRemoveButton,
  ProductSubtotalContainer,
  ProductAmountContainer,
  ProductAmountDecrement,
  ProductAmount,
  ProductAmountIncrement,
  ProductSubtotal,
  ProductTotalContainer,
  ProductTotalLabel,
  ProductTotal,
  FinishOrderButton,
  FinishOrderButtonText,
} from './styles';

import {formatPrice} from '../../util/format';

function renderItem(item, updateAmount, removeFromCart) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

  return (
    <Product>
      <ProductSKU>
        <ProductImage source={{uri: item.image}} />
        <ProductDescription>
          <ProductTitle>{item.title}</ProductTitle>
          <ProductPriceContainer>
            <ProductPrice>{formatPrice(item.price)}</ProductPrice>
            <ProductRemoveButton onPress={() => removeFromCart(item.id)}>
              <Icon name="remove-shopping-cart" size={25} color="#7159c1" />
            </ProductRemoveButton>
          </ProductPriceContainer>
        </ProductDescription>
      </ProductSKU>
      <ProductSubtotalContainer>
        <ProductAmountContainer>
          <ProductAmountDecrement onPress={() => decrement(item)}>
            <Icon name="remove-circle" size={25} color="#7159c1" />
          </ProductAmountDecrement>
          <ProductAmount>{item.amount}</ProductAmount>
          <ProductAmountIncrement onPress={() => increment(item)}>
            <Icon name="add-circle" size={25} color="#7159c1" />
          </ProductAmountIncrement>
        </ProductAmountContainer>
        <ProductSubtotal>{item.subtotal}</ProductSubtotal>
      </ProductSubtotalContainer>
    </Product>
  );
}

function Cart({navigation, cart, removeFromCart, updateAmount, total}) {
  if (cart.length === 0) {
    return (
      <Container>
        <EmptyCartText>Seu Carrinho Está vazio.</EmptyCartText>
      </Container>
    );
  }
  return (
    <Container>
      <ProductList
        data={cart}
        keyExtractor={product => product.id}
        renderItem={({item}) => renderItem(item, updateAmount, removeFromCart)}
      />
      <ProductTotalContainer>
        <ProductTotalLabel>TOTAL</ProductTotalLabel>
        <ProductTotal>{total}</ProductTotal>
      </ProductTotalContainer>
      <FinishOrderButton onPress={() => navigation.navigate('Home')}>
        <FinishOrderButtonText>FINALIZAR PEDIDO</FinishOrderButtonText>
      </FinishOrderButton>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
