import styled from 'styled-components/native';
import { TouchableOpacity as RNTouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

interface HamburgerProps {
    isOpen: boolean;
}

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
  padding: 0 15px; 
`;

export const Hamburger = styled(RNTouchableOpacity)<HamburgerProps>`
  background-color: ${({ isOpen }) => (isOpen ? '#000' : '#ececec')};
  padding: 25px;
  width: ${({ isOpen }) => (isOpen ? "270px" : "70px")};
  justify-content: center;
  height: 100%;
  align-self: flex-end;
`;

export const styles = StyleSheet.create({
  clientName: {
    color: 'black',
    fontSize:21,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,  
  }
});
