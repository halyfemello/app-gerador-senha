# App gerador de senhas em react native + expo 
## _Considerações iniciais_ 

- Realizei a construção de um app prototipo que selecionado um número para o tamanho realiza a geração aleatoria de uma senha em, tambem ao clicar e segurar essa senha pode ser salva no dispositivo e copiada para a area de transferencia do aparelho.
- Realizado o desenvolvimento em um ambiente linux mint com vs code. 

- Dependências / bibliotecas utilizadas: 
```sh
  "dependencies": {
    "@expo/metro-runtime": "^3.1.1",
    "@react-native-async-storage/async-storage": "1.21.0",
    "@react-native-community/slider": "4.4.2",
    "@react-navigation/bottom-tabs": "^6.5.11",
    "@react-navigation/native": "^6.1.9",
    "expo": "~50.0.2",
    "expo-clipboard": "~5.0.1",
    "expo-status-bar": "~1.11.1",
    "react": "18.2.0",
    "react-dom": "^18.2.0",
    "react-native": "0.73.2",
    "react-native-safe-area-context": "4.8.2",
    "react-native-screens": "~3.29.0",
    "react-native-web": "^0.19.10"
  },
 ```
- expo => Utilizado para criação e execução do app no emulador e em dispositivos móveis dado a sua praticidade e agilidade. 
- @react-native-community/slider => Utilizada para ter acesso ao componente de slider para selecionar o tamanho de caracteres na senha. 
- @react-navigation/native => Utilizado para a criação de abas incluso a home e senhas salvas. 
- @react-native-async-storage/async-storage => Utilizado para poder ter acesso a um banco de dados local nos dispositivos para realizar o armazenamento das senhas salvas. 

#### Bibliotecas 

```sh
npx expo install @react-native-community/slider

npx expo install react-native-screens react-native-safe-area-context

npx expo install @react-native-async-storage/async-storage
```

#### Executar
```sh
npx expo start

clicar => "a" para executar no emulador ou ler o qrcode no app do expo no aparelho. 
```

#### Imagens

![image](https://github.com/halyfemello/app-gerador-senha/assets/30935716/1ee4ac0f-bd57-4362-a9fb-aa7550fca704)

![image](https://github.com/halyfemello/app-gerador-senha/assets/30935716/229d433b-df34-4fc8-925a-061696b210eb)

![image](https://github.com/halyfemello/app-gerador-senha/assets/30935716/e68dbf26-6204-4c4f-a514-6ef59ac766c1)

![image](https://github.com/halyfemello/app-gerador-senha/assets/30935716/7d60432c-5bec-4b04-b41a-c003d7d28f3f)
