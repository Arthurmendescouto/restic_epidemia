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
        <Text style={styles.title}>Welldome</Text>
        <Text style={styles.text}>
        Welldome é responsável por vender dados e informações relacionadas à epidemias para serem compradas por empresas da área da saúde para que elas saibam os lugares onde as epidemias prevalecem e existe um maior mercado  de atuação para essas empresas que atuem com tratamentos, medicamentos ou consultas atreladas à doenças epidêmicas.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SearchData')} // Substitua 'SomeScreen' pela tela de destino
        >
          <Text style={styles.buttonText}>Comece Aqui</Text>
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
