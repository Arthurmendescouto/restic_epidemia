import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import styled from 'styled-components';
import { styles } from './styles';

type MainProps = {
  navigation: NavigationProp<any>;
};

const Main: React.FC<MainProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
      <Text style={styles.title}></Text>
      </View>
      
      
    </View>

    
  );
};

export default Main;