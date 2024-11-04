import { Container, ButtonWrapper, Hamburger } from "./styles"; 
import { Text } from "react-native";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Menu } from '../Hamburguer'; // Importe o Menu aqui

export function Header() {
    const [menuVisible, setMenuVisible] = useState(false); // Estado para controlar a visibilidade do menu

    const toggleMenu = () => {
        setMenuVisible(!menuVisible); // Alterna a visibilidade do menu
    };

    return (
        <Container>
            <ButtonWrapper>
                <Hamburger onPress={toggleMenu} isOpen={menuVisible}>
                    <Icon name="bars" size={24} color={menuVisible? "#fff":"#000"} style={{ marginTop: 15 }} />
                </Hamburger>
                
                {/* Renderize o Menu passando as props apropriadas */}
                <Menu isVisible={menuVisible} onClose={toggleMenu} />
            </ButtonWrapper>
        </Container>
    );
}
