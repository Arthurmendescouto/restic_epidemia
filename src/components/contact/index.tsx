import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../header'; 

const Contato = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações para contato e suporte</Text>
      <Text style={styles.info}>Email: arthurmendescouto16@gmail.com</Text>
      <Text style={styles.info}>Telefone: (73) 98231-4739</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  info: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
});

export default Contato;
