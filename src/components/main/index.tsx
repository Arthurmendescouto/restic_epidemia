import React from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { styles } from './styles';

type MainProps = {
  navigation: NavigationProp<any>;
};

const Main: React.FC<MainProps> = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Title 1</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iure eligendi asperiores dolorem voluptatibus saepe consequatur numquam assumenda earum laudantium nihil, neque tempora quam quod distinctio ut suscipit esse alias.
        </Text>
        <Image
          source={require('../../assets/img/graficoCovid.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Title 2</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iure eligendi asperiores dolorem voluptatibus saepe consequatur numquam assumenda earum laudantium nihil, neque tempora quam quod distinctio ut suscipit esse alias.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Title 3</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iure eligendi asperiores dolorem voluptatibus saepe consequatur numquam assumenda earum laudantium nihil, neque tempora quam quod distinctio ut suscipit esse alias.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Main;
