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

#### Executar
```sh
npx expo start

clicar => "a" para executar no emulador ou ler o qrcode no app do expo no aparelho. 
```
