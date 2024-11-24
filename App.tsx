import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from './src/components/header';
import Main from './src/components/main';
import MainNew from './src/components/search-data';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import '@expo/metro-runtime';
import { Menu } from './src/components/Hamburguer';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const [isModalVisible, setIsModalVisible] = useState(false); // Inicia com o modal oculto
  const [username, setUsername] = useState<string | null>(null);

  const saveUsername = async (username: string) => {
    try {
      await AsyncStorage.setItem('username', username);
      setUsername(username);
    } catch (error) {
      console.error("Erro ao salvar nome de usuário:", error);
    }
  };

  const getUsername = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('username');
      if (storedUsername !== null) {
        setUsername(storedUsername);
        setIsModalVisible(false); // Fecha o modal se o nome estiver salvo
      } else {
        setIsModalVisible(true); // Abre o modal se o nome não estiver salvo
      }
    } catch (error) {
      console.error("Erro ao obter nome de usuário:", error);
    }
  };

  useEffect(() => {
    getUsername(); // Checa o nome de usuário ao carregar o componente
  }, []);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleLogin = (values: { username: string, password: string }) => {
    
    saveUsername(values.username); // Salva o nome de usuário no AsyncStorage
    closeModal();
  };

  return (
    <View style={styles.container}>
      
      <Main navigation={navigation} />
      <Header navigation={navigation} username={username} /> 
      

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

const SearchDataScreen = ({ navigation }: { navigation: any }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false); // Controle do menu

  useEffect(() => {
    const getUsername = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem('username');
        if (storedUsername !== null) {
          setUsername(storedUsername);
        }
      } catch (error) {
        console.error("Erro ao obter nome de usuário:", error);
      }
    };
    getUsername();
  }, []);

  const toggleMenu = () => setIsMenuVisible(!isMenuVisible); // Função para abrir/fechar o menu

  return (
    <View style={styles.container}>
      <MainNew navigation={navigation} />
      <Header navigation={navigation} username={username} />
      <View>
        
        <TouchableOpacity onPress={toggleMenu}>
          {/* Este é o botão para abrir o menu */}
        </TouchableOpacity>
      </View>

      {/* Componente Menu */}
      <Menu isVisible={isMenuVisible} onClose={toggleMenu} navigation={navigation} />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" id={undefined}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchData"
          component={SearchDataScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column-reverse',
    justifyContent:'flex-end',
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