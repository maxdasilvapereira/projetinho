import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={style.container}>
<Text style={style.logo}>CARPAS</Text>
<Text style={style.title}>E-mail</Text>
<TextInput style={style.input}/>
<Text style={style.title}>Senha</Text>
<TextInput style={style.input}/>
</View>
  );
}

const style = StyleSheet.create({

  container: {
  
  flex: 1,
  
  backgroundColor: '#121214',
  
  alignItems: 'center',
  
  justifyContent: 'center',
  
  },
  logo: {
      fontSize: 70,
      color: 'white',
      marginBottom: 75,
  },

  title: {
      color:'#79d6b7',
      fontSize: 20,
      padding: 20,
  },
  
  input: {
      backgroundColor: '#b4e1de',
      width: 280,
      height: 45,
      borderRadius: 7,
      color: 'white',
      
  },
 
});
