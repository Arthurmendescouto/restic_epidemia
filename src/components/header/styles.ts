import styled from 'styled-components/native';
import { TouchableOpacity as RNTouchableOpacity } from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';

interface HamburgerProps {
    isOpen: boolean;
}

// Obter as dimensões da tela
const { width } = Dimensions.get('window');  // Pega a largura da tela
const hamburgerWidth = width * 0.5;  // 30% da largura da tela

export const Container = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
`;

export const ButtonWrapper = styled.View`
  background-color: #ececec;
  width: 100%;
  height: 90px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px 0px 15px;
`;

export const Hamburger = styled(RNTouchableOpacity)<HamburgerProps>`
  background-color: ${({ isOpen }) => (isOpen ? '#000' : '#ececec')};
  padding: 25px;
  width: ${({ isOpen }) => (isOpen ? `${hamburgerWidth}px` : "70px")};  /* 30% da largura da tela */
  justify-content: center;
  height: 100%;
  align-self: flex-end;
  margin-left: 20px;
`;

export const styles = StyleSheet.create({
  clientName: {
    color: 'black',
    fontSize: 21,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});