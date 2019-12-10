import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const ProductList = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Product = styled.View`
  margin: 0px 20px;
  padding: 0px 20px;

  height: 450px;
  width: 300px;
  background: #fff;
  border-radius: 4px;
`;
export const ProductImage = styled.Image`
  width: 250px;
  height: 250px;
  align-self: center;
`;
export const ProductTitle = styled.Text`
  margin: 10px;
  min-height: 60px;
  color: #333;
  font-size: 20px;
`;
export const ProductPrice = styled.Text`
  font-size: 26px;
  font-weight: bold;
  margin: 0 10px;
  margin-top: auto;
`;
export const AddToCartButton = styled(RectButton)`
  margin-top: auto;
  margin-bottom: 10px;

  max-height: 50px;
  background: #7159c1;
  flex: 5;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
`;
export const AddToCartCounter = styled.View`
  padding: 0px 10px;
  height: 50px;
  background: rgba(0, 0, 0, 0.1);
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const AddToCartButtonText = styled.Text`
  flex: 4;
  flex-direction: row;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;
