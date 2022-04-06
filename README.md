## Trilha React Native

### Anotações
Criar projeto
	npx react-native init projetoteste1
	
Inciar
	npm start
	-> Na outra aba
		npx react-native run-android
			Listar avds disponiveis
				emulator -list-avds
			Executar um avd especifico
				emulator -avd 01Android_API_26 -netdelay none -netspeed full
				
Acesso a api: Android
	adb reverse tcp:3333 tcp:3333
	
	
Converter para TypeScript -> https://reactnative.dev/docs/typescript
	Rename App.js -> App.tsx
	create tsconfig.json in root
		https://github.com/expo/expo/blob/master/templates/expo-template-blank-typescript/tsconfig.json
	yarn add --dev  @types/react @types/react-native @types/react-dom
	npm i  --dev  @types/react @types/react-native @types/react-dom
	
 Dependencias
	yarn add -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer
	
