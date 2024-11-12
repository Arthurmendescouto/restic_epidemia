import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from './src/components/header';
import Main from './src/components/main';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [username, setUsername] = useState<string | null>(null); // Estado para o nome de usuário

  // Função para salvar o nome de usuário no AsyncStorage
  const saveUsername = async (username: string) => {
    try {
      await AsyncStorage.setItem('username', username); // Salva no AsyncStorage
      setUsername(username); // Atualiza o estado
    } catch (error) {
      console.error("Erro ao salvar nome de usuário:", error);
    }
  };

  // Função para buscar o nome de usuário do AsyncStorage
  const getUsername = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('username');
      if (storedUsername !== null) {
        setUsername(storedUsername); // Define o estado com o nome armazenado
      }
    } catch (error) {
      console.error("Erro ao obter nome de usuário:", error);
    }
  };

  useEffect(() => {
    getUsername(); // Busca o nome de usuário ao carregar o componente
  }, []);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleLogin = (values: { username: string, password: string }) => {
    console.log("Usuário:", values.username);
    console.log("Senha:", values.password);
    saveUsername(values.username); // Salva o nome de usuário no AsyncStorage
    closeModal();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Principal</Text>
      <Header navigation={navigation} username={username} /> {/* Passa o username para o Header */}
      <Main navigation={navigation} />

      {isModalVisible && (
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>Login</Text>
            <Formik
              initialValues={{ username: '', password: '' }}
              validationSchema={Yup.object({
                username: Yup.string()
                  .required('Nome de usuário é obrigatório')
                  .min(4, 'Nome de usuário deve ter pelo menos 4 caracteres'),
                password: Yup.string()
                  .required('Senha é obrigatória')
                  .min(6, 'A senha deve ter pelo menos 6 caracteres'),
              })}
              onSubmit={handleLogin}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={styles.form}>
                  <View style={styles.inputGroup}>
                    <Text>Usuário:</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange('username')}
                      onBlur={handleBlur('username')}
                      value={values.username}
                    />
                    {touched.username && errors.username && <Text style={styles.error}>{errors.username}</Text>}
                  </View>
                  <View style={styles.inputGroup}>
                    <Text>Senha:</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      secureTextEntry
                    />
                    {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}
                  </View>
                  <Button title="Logar" onPress={() => handleSubmit()} />
                </View>
              )}
            </Formik>
          </View>
        </View>
      )}
    </View>
  );
};

const NewScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Página</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NovaPagina"
          component={NewScreen}
          options={{ title: 'Nova Página' }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d4d4d4',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  modalContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(141, 141, 141, 0.722)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  modal: {
    width: 300,
    padding: 20,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  modalText: {
    color: 'black',
    fontSize: 18,
    marginBottom: 20,
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  inputGroup: {
    width: '100%',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    paddingLeft: 10,
    width: '100%',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});

export default App;