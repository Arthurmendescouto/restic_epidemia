// src/App.tsx
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from './src/components/header'; // Certifique-se de que o caminho esteja correto
import Main from './src/components/main';
import "@expo/metro-runtime";

// Criação do Stack Navigator
const Stack = createNativeStackNavigator();

// Página Principal
const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Principal</Text>
      <Header navigation={navigation} /> {/* Passa a prop de navegação aqui */}
      <Main navigation={navigation} />
      
    </View>
  );
};

// Nova Página
const NewScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Página</Text>
    </View>
  );
};

// Componente App
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Oculta o header na página Home
        />
        <Stack.Screen
          name="NovaPagina"
          component={NewScreen}
          options={{ title: 'Nova Página' }} // Personaliza o título do header na NovaPagina
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#990101',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
});

export default App;
