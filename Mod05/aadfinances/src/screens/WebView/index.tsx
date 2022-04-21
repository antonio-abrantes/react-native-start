import React from "react";
import { WebView } from "react-native-webview";
import { StatusBar } from "react-native";

export function ContainerWebView() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <WebView
        source={{ uri: "https://dev.meucarrinho.delivery/reservegarden" }}
      />
    </>
  );
}
