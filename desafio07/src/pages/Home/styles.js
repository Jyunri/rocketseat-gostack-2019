import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const ProductList = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Product = styled.View`
  margin: 0px 20px;
  height: 358px;
  width: 220px;
  background: #FFF;
  align-items: center;
  border-radius: 4px
`;
export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;
export const ProductTitle = styled.Text`
  font-size: 16px;
  margin: 10px 20px;
`;
export const ProductPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin: 0px 20px;
`;
export const AddToCartButton = styled(RectButton)`
  background: #7159c1;
  height: 42px;
  min-width: 53px;
`;
export const AddToCartButtonText = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 14px;
`;
