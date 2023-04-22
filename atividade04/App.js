import { StyleSheet, View } from 'react-native';
import Form from './src/components/form';
import Title from './src/components/title';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/HomeScreen';
import CounterScreen from './src/components/CounterScreen';
import GeradorImagem from './src/components/GeradorImagem';
import Galeria from './src/components/Galeria';
import Filmes from './src/components/Filmes';



const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Form' component={Form} />
        <Stack.Screen name='Contador' component={CounterScreen}/>
        <Stack.Screen name='Imagem' component={GeradorImagem}/>
        <Stack.Screen name='Galeria' component={Galeria}/>
        <Stack.Screen name='Filmes' component={Filmes}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

/*
export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

*/