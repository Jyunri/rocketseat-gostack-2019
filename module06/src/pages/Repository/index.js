import React from 'react';
import WebView from 'react-native-webview';
import { ActivityIndicator } from 'react-native';

// import { Container } from './styles';

export default function Repository({ navigation }) {
  const repository = navigation.getParam('repository');
  return (
    <WebView
      startInLoadingState
      renderLoading={() => <ActivityIndicator />}
      source={{ uri: repository.html_url }}
      style={{ flex: 1 }}
    />
  );
}

Repository.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam('repository').name,
  };
};
