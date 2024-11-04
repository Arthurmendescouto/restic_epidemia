import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

type MainProps = {
  navigation: NavigationProp<any>;
};

const Main: React.FC<MainProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Componente Main</Text>
      <Button
        title="Exemplo de Navegação"
        onPress={() => navigation.navigate('NovaPagina')}
      />
    </View>
  );
};

export default Main;