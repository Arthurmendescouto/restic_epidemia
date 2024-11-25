import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Contato = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações para contato e suporte</Text>
      <Text style={styles.info}>Email: welldome@gmail.com</Text>
      <Text style={styles.info}>Telefone: (99) 99999-9999</Text>
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
