import React from 'react';
import { View, Text, Button, Image, ScrollView,TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import{useFonts,Poppins_400Regular,Poppins_700Bold, Poppins_600SemiBold} from '@expo-google-fonts/poppins'
import { styles } from './styles';

type MainProps = {
  navigation: NavigationProp<any>;
};

const Main: React.FC<MainProps> = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold
  });
  if(!fontsLoaded){
    return null
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Title 1</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iure eligendi asperiores dolorem voluptatibus saepe consequatur numquam assumenda earum laudantium nihil, neque tempora quam quod distinctio ut suscipit esse alias.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('NovaPagina')} // Substitua 'SomeScreen' pela tela de destino
        >
          <Text style={styles.buttonText}>Clique Aqui</Text>
        </TouchableOpacity>
        <Image
          source={require('../../assets/img/graficoCovid.png')}
          style={styles.image}
        />
      </View>
      
      
     

      
    </ScrollView>
  );
};

export default Main;
