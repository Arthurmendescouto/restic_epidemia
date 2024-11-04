import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { NavigationProp } from '@react-navigation/native';

const MenuContainer = styled.View`
  position: absolute;
  top: 90px; /* Ajuste conforme a altura do seu cabeçalho */
  right: 0;
  background-color: #000000; /* Cor do container do menu */
  padding: 10px;
  width: 270px; /* Ajuste a largura conforme necessário */
  height: 800px; /* Faz o menu ocupar 100% da altura */
  z-index: 10; /* Garante que o menu fique acima de outros elementos */
`;

const MenuButton = styled(TouchableOpacity)`
  padding: 35px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

const MenuText = styled(Text)`
  color: #fff; /* Cor do texto dentro do menu */
`;

interface MenuProps {
  isVisible: boolean;
  onClose: () => void;
  navigation: NavigationProp<any>; // Certifique-se de que a prop navigation está aqui
}

export const Menu: React.FC<MenuProps> = ({ isVisible, onClose, navigation }) => {
  if (!isVisible) return null; // Não renderiza nada se não estiver visível

  return (
    <MenuContainer>
      <MenuButton onPress={() => { navigation.navigate('NovaPagina'); onClose(); }}>
        <MenuText>ex1</MenuText>
      </MenuButton>
      <MenuButton onPress={onClose}>
        <MenuText>ex2</MenuText>
      </MenuButton>
      <MenuButton onPress={onClose}>
        <MenuText>ex3</MenuText>
      </MenuButton>
      <MenuButton onPress={onClose}>
        <MenuText>ex4</MenuText>
      </MenuButton>
    </MenuContainer>
  );
};