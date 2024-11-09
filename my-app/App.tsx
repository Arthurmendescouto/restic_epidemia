// src/App.tsx
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from './src/components/header';
import Main from './src/components/main';
import "@expo/metro-runtime";


const Stack = createNativeStackNavigator();


const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Principal</Text>
      <Header navigation={navigation} /> 
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
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="NovaPagina"
          component={NewScreen}
          options={{ title: 'Nova Página' }} 
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
    backgroundColor: '#d4d4d4',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
});

export default App;
