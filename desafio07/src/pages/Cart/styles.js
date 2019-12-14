import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  margin: 40px 20px;
  margin-bottom: 100px;
  padding: 0px 20px;

  flex: 1;
  background: #fff;
  border-radius: 4px;
`;

export const EmptyCartText = styled.Text`
  flex: 1;
  margin: 30px;
  color: #000;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`;

export const ProductList = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Product = styled.View`
  margin: 20px 0px;
  border-radius: 4px;
`;

export const ProductSKU = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  background: #fff;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
  align-self: center;
`;

export const ProductDescription = styled.View`
  margin: 0 10px;
`;

export const ProductTitle = styled.Text`
  color: #333;
  font-size: 20px;
`;

export const ProductPriceContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;

export const ProductPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const ProductRemoveButton = styled(RectButton)``;

export const ProductSubtotalContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  height: 50px;
  background: #eee;
`;

export const ProductAmountContainer = styled.View`
  flex-direction: row;
`;

export const ProductAmountDecrement = styled(RectButton)`
  margin: 5px;
  justify-content: center;
  align-items: center;
`;

export const ProductAmount = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  height: 40px;
  width: 80px;
  background: #fff;
  border-radius: 4px;
  padding-right: 15px;
  border: 1px solid #eee;
`;

export const ProductAmountIncrement = styled(RectButton)`
  margin: 5px;
  justify-content: center;
  align-items: center;
`;

export const ProductSubtotal = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const ProductTotalContainer = styled.View`
  margin: 40px 0px;
  align-items: center;
  justify-content: space-between;
`;

export const ProductTotalLabel = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #999;
`;
export const ProductTotal = styled.Text`
  margin-top: 20px;
  font-size: 40px;
  font-weight: bold;
`;

export const FinishOrderButton = styled(RectButton)`
  margin-top: auto;
  margin-bottom: 10px;

  max-height: 50px;
  background: #7159c1;
  flex: 5;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
`;

export const FinishOrderButtonText = styled.Text`
  flex: 4;
  flex-direction: row;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;
