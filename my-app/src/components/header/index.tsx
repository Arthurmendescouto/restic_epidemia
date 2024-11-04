// src/components/header/index.tsx
import { Container, ButtonWrapper, Hamburger } from "./styles"; 
import { Text } from "react-native";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Menu } from '../Hamburguer'; // Importe o Menu aqui
import { NavigationProp } from '@react-navigation/native'; // Importa o tipo NavigationProp

interface HeaderProps {
    navigation: NavigationProp<any>; // Define a interface para as props
}

export function Header({ navigation }: HeaderProps) {
    const [menuVisible, setMenuVisible] = useState(false); // Estado para controlar a visibilidade do menu

    const toggleMenu = () => {
        setMenuVisible(!menuVisible); // Alterna a visibilidade do menu
    };

    return (
        <Container>
            <ButtonWrapper>
                <Hamburger onPress={toggleMenu} isOpen={menuVisible}>
                    <Icon name="bars" size={24} color={menuVisible ? "#fff" : "#000"} style={{ marginTop: 15 }} />
                </Hamburger>
                
                {/* Renderize o Menu passando as props apropriadas */}
                <Menu 
                    isVisible={menuVisible} 
                    onClose={toggleMenu} 
                    navigation={navigation} // Passa a prop de navegação aqui
                />
            </ButtonWrapper>
        </Container>
    );
}
