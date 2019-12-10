import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {formatPrice} from '../../util/format';
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
  {
    id: 3,
    title: 'Tênis Adidas Duramo Lite 2.0',
    price: 219.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
  },
  {
    id: 5,
    title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
    price: 139.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
  },
  {
    id: 6,
    title: 'Tênis Adidas Duramo Lite 2.0',
    price: 219.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
  },
  {
    id: 4,
    title: 'Tênis de Caminhada Leve Confortável',
    price: 179.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
  },
];

function renderItem(item) {
  return (
    <Product>
      <ProductImage source={{uri: item.image}} />
      <ProductTitle>{item.title}</ProductTitle>
      <ProductPrice>{formatPrice(item.price)}</ProductPrice>
      <AddToCartButton>
        <AddToCartCounter>
          <Icon name="shopping-cart" size={25} color="#FFF" />
          <Text style={{color: '#FFF'}}>1</Text>
        </AddToCartCounter>
        <AddToCartButtonText>ADICIONAR</AddToCartButtonText>
      </AddToCartButton>
    </Product>
  );
}

export default function Home() {
  return (
    <ProductList
      data={products}
      keyExtractor={product => product.id}
      renderItem={({item}) => renderItem(item)}
      horizontal
    />
  );
}
