import { Container, ButtonWrapper, Hamburger } from "./styles"; 
import { Text } from "react-native";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Menu } from '../Hamburguer'; 
import { NavigationProp } from '@react-navigation/native'; 
import { styles } from "./styles";

interface HeaderProps {
    navigation: NavigationProp<any>;
    username: string | null; // Adiciona username como prop
}

export function Header({ navigation, username }: HeaderProps) {
    
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <Container>
            <ButtonWrapper>
                {username ? (
                    <Text style={styles.clientName}>Olá, {username}</Text>
                ) : (
                    <Text>Olá, visitante</Text>
                )}
                <Hamburger onPress={toggleMenu} isOpen={menuVisible}>
                    <Icon name="bars" size={24} color={menuVisible ? "#000" : "#000"} style={{ marginTop: 15 }} />
                </Hamburger>
                <Menu 
                    isVisible={menuVisible} 
                    onClose={toggleMenu} 
                    navigation={navigation} 
                />
                
            </ButtonWrapper>
        </Container>
    );
}