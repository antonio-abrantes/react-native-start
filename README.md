## Trilha React Native

### Anotações - Expo
- [Instalar o Expo - Documentação](https://docs.expo.dev/)
	```
	npm install -g expo-cli
	```
- Criar projeto usando o Expo
	```
	expo init nomeapp
	```
- Iniciar projeto Expo
	```
	expor start
	```
##### Instalar fontes
```
	expo install expo-font @expo-google-fonts/nome-fonte
```
##### Tela de loading
```
	expo install expo-app-loading
```

### Anotações - React CLI
- Criar projeto
	```
	npx react-native init projetoteste1
	```
	
#### Inciar
```
npm start
```
#### Na outra aba
```
npx react-native run-android
```
#### Acesso a api: Android
```
adb reverse tcp:3333 tcp:3333
```

#### [Converter para TypeScript](https://reactnative.dev/docs/typescript)
- Rename App.js -> App.tsx
	 - create tsconfig.json in root - [Modelo](https://github.com/expo/expo/blob/master/templates/expo-template-blank-typescript/tsconfig.json)

#### Dependencias
```
yarn add --dev  @types/react @types/react-native @types/react-dom
npm i  --dev  @types/react @types/react-native @types/react-dom
```
```
yarn add -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer
```
## Dependências extras
- [Styled Components](https://github.com/styled-components/styled-components)
	```
	yarn add styled-components
	yarn add @types/styled-components-react-native -D
	```
- [React Native WebView](https://github.com/react-native-webview/react-native-webview)
	```
	expo install react-native-webview
	```
## Dicas extras

#### Listar avds disponiveis
```
emulator -list-avds
```
#### Executar um avd especifico
```
emulator -avd 01Android_API_26 -netdelay none -netspeed full
```
#### Debug
 - Ctrl + m => Abrir menu de debug