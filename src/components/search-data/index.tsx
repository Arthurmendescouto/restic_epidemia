import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { styles } from './styles';

type MainNewProps = {
  navigation: NavigationProp<any>;
};

const MainNew: React.FC<MainNewProps> = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Title 2</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iure eligendi asperiores dolorem voluptatibus
          saepe consequatur numquam assumenda earum laudantium nihil, neque tempora quam quod distinctio ut suscipit
          esse alias.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SearchData')} // Verifique o nome correto da tela
        >
          <Text style={styles.buttonText}>Clique Aqui</Text>
        </TouchableOpacity>
        <Image source={require('../../assets/img/graficoCovid.png')} style={styles.image} />
      </View>
    </ScrollView>
  );
};

export default MainNew;
