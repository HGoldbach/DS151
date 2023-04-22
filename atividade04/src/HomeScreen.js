import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title='Calcula Média' onPress={() => navigation.navigate('Form')}/>
            <Button title='Contador' onPress={() => navigation.navigate('Contador')}/>
            <Button title='Troca Imagens' onPress={() => navigation.navigate('Imagem')}/>
            <Button title='Galeria' onPress={() => navigation.navigate('Galeria')}/>
            <Button title='Filmes' onPress={() => navigation.navigate('Filmes')}/>
        </View>
    )
}



export default HomeScreen;