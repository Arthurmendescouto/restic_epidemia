import styled from 'styled-components/native';
import { TouchableOpacity as RNTouchableOpacity } from 'react-native';

// Definição da interface para as props do componente Hamburger
interface HamburgerProps {
    isOpen: boolean;
}

export const Container = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
`;

export const ButtonWrapper = styled.View`
  background-color: green;
  width: 100%;
  height: 90px;
  flex-direction: row;
  gap: 10px;
  align-items: center; /* Centraliza os outros botões verticalmente */
  justify-content: flex-end;
`;

export const Hamburger = styled(RNTouchableOpacity)<HamburgerProps>`
  background-color: ${({ isOpen }) => (isOpen ? '#000' : '#ececec')};
  padding: 25px;
  width: ${({isOpen})=>(isOpen?270:70)};
  justify-content: center;
  height: 100%;
  align-self: flex-end; /* Posiciona o ícone no final do ButtonWrapper */
`;
