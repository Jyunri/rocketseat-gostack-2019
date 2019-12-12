import React from 'react';

import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  EmptyCartText,
  ProductList,
  Product,
  ProductSKU,
  ProductImage,
  ProductDescription,
  ProductTitle,
  ProductPrice,
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

const products = [
  {
    id: 1,
    title: 'Tênis de Caminhada Leve Confortável',
    price: 179.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
  },
  {
    id: 2,
    title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
    price: 139.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
  },
];

function renderItem(item) {
  return (
    <Product>
      <ProductSKU>
        <ProductImage source={{uri: item.image}} />
        <ProductDescription>
          <ProductTitle>{item.title}</ProductTitle>
          <ProductPrice>{formatPrice(item.price)}</ProductPrice>
        </ProductDescription>
      </ProductSKU>
      <ProductSubtotalContainer>
        <ProductAmountContainer>
          <ProductAmountDecrement onClick={() => console.log(item)}>
            <Icon name="remove-circle" size={25} color="#7159c1" />
          </ProductAmountDecrement>
          <ProductAmount>3</ProductAmount>
          <ProductAmountIncrement onClick={() => console.log(item)}>
            <Icon name="add-circle" size={25} color="#7159c1" />
          </ProductAmountIncrement>
        </ProductAmountContainer>
        <ProductSubtotal>{formatPrice(item.price)}</ProductSubtotal>
      </ProductSubtotalContainer>
    </Product>
  );
}

export default function Cart({navigation}) {
  if (products.length === 0) {
    return (
      <Container>
        <EmptyCartText>Seu Carrinho Está vazio.</EmptyCartText>
      </Container>
    );
  }
  return (
    <Container>
      <ProductList
        data={products}
        keyExtractor={product => product.id}
        renderItem={({item}) => renderItem(item)}
      />
      <ProductTotalContainer>
        <ProductTotalLabel>TOTAL</ProductTotalLabel>
        <ProductTotal>{formatPrice(700)}</ProductTotal>
      </ProductTotalContainer>
      <FinishOrderButton onPress={() => navigation.navigate('Home')}>
        <FinishOrderButtonText>FINALIZAR PEDIDO</FinishOrderButtonText>
      </FinishOrderButton>
    </Container>
  );
}
