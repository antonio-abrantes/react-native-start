import React from 'react';
import { WebView } from 'react-native-webview';

export default function MyWebComponent() {
  return <WebView source={{ uri: 'https://dev.meucarrinho.delivery/reservegarden' }} />;
}