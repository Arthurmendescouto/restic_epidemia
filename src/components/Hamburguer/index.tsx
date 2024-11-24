import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { NavigationProp } from '@react-navigation/native';
import { Dimensions } from 'react-native'; // Importando para pegar as dimensões da tela
import {useFonts, Poppins_600SemiBold } from './../../../node_modules/@expo-google-fonts/poppins/index';

// Obter a largura da tela
const { width } = Dimensions.get('window');  // Pega a largura da tela
const menuWidth = width * 0.5;  // 30% da largura da tela

const MenuContainer = styled.View`
  position: absolute;
  top: 90px; /* Ajuste conforme a altura do seu cabeçalho */
  right: 0;
  background-color: #fbfbfb; /* Cor do container do menu */
  z-index: 999;
  padding: 10px;
  width: ${menuWidth}px; /* 30% da largura da tela */
  height: 1000px; /* Faz o menu ocupar 100% da altura */
`;

const MenuButton = styled.TouchableOpacity`
  padding: 35px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  
`;

const MenuText = styled.Text`
  color: #000; /* Cor do texto dentro do menu */
  font-family: 'Poppins_600SemiBold';
`;

interface MenuProps {
  isVisible: boolean;
  onClose: () => void;
  navigation: NavigationProp<any>; // Certifique-se de que a prop navigation está aqui
}

export const Menu: React.FC<MenuProps> = ({ isVisible, onClose, navigation }) => {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold, 
  });

  
  if (!fontsLoaded) {
    return null; 
  }

  if (!isVisible) return null; 

  return (
    <MenuContainer>
      <MenuButton onPress={()=>{navigation.navigate('Home'); onClose();}}>
        <MenuText>Home</MenuText>
      </MenuButton>
      <MenuButton onPress={() => { navigation.navigate('SearchData'); onClose(); }}>
        <MenuText>Buscar dados</MenuText>
      </MenuButton>
      <MenuButton onPress={() => { navigation.navigate('Contato'); onClose(); }}>
        <MenuText>Suporte</MenuText>
      </MenuButton>
      
    </MenuContainer>
  );
};