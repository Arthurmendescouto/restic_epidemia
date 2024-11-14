import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

type MainProps = {
  navigation: NavigationProp<any>;
};

const Main: React.FC<MainProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Componente Main Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae porro voluptatem nulla, ipsam amet earum quidem ab esse temporibus id facere tempora. Facere earum magnam quam dignissimos dolorem, aut distinctio?</Text>
      
    </View>
  );
};

export default Main;