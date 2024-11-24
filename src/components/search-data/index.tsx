import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { styles } from './styles';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';


type MainNewProps = {
  navigation: NavigationProp<any>;
};

const states = [
  { name: 'Acre', abbreviation: 'AC' },
  { name: 'Alagoas', abbreviation: 'AL' },
  { name: 'Amapá', abbreviation: 'AP' },
  { name: 'Amazonas', abbreviation: 'AM' },
  { name: 'Bahia', abbreviation: 'BA' },
  { name: 'Ceará', abbreviation: 'CE' },
  { name: 'Distrito Federal', abbreviation: 'DF' },
  { name: 'Espírito Santo', abbreviation: 'ES' },
  { name: 'Goiás', abbreviation: 'GO' },
  { name: 'Maranhão', abbreviation: 'MA' },
  { name: 'Mato Grosso', abbreviation: 'MT' },
  { name: 'Mato Grosso do Sul', abbreviation: 'MS' },
  { name: 'Minas Gerais', abbreviation: 'MG' },
  { name: 'Pará', abbreviation: 'PA' },
  { name: 'Paraíba', abbreviation: 'PB' },
  { name: 'Paraná', abbreviation: 'PR' },
  { name: 'Pernambuco', abbreviation: 'PE' },
  { name: 'Piauí', abbreviation: 'PI' },
  { name: 'Rio de Janeiro', abbreviation: 'RJ' },
  { name: 'Rio Grande do Norte', abbreviation: 'RN' },
  { name: 'Rio Grande do Sul', abbreviation: 'RS' },
  { name: 'Rondônia', abbreviation: 'RO' },
  { name: 'Roraima', abbreviation: 'RR' },
  { name: 'Santa Catarina', abbreviation: 'SC' },
  { name: 'São Paulo', abbreviation: 'SP' },
  { name: 'Sergipe', abbreviation: 'SE' },
  { name: 'Tocantins', abbreviation: 'TO' },
];

const MainNew: React.FC<MainNewProps> = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedState, setSelectedState] = useState<string>('');
  const [stateData, setStateData] = useState<{ casos: number; mortes: number } | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleSearch = () => {
    if (selectedState) {
      setErrorMessage('');
      axios
        .get(`http://192.168.3.65:3000/estados/${selectedState}`) // Substituir pelo IP correto
        .then((res) => {
          setStateData(res.data);
        })
        .catch((err) => {
          console.error('Erro ao buscar os dados:', err);
          setErrorMessage('Erro ao buscar os dados. Verifique sua conexão ou tente novamente.');
          setStateData(null);
        });
    } else {
      setErrorMessage('Selecione um estado antes de pesquisar.');
    }
  };

  const filteredStates = states.filter((state) =>
    state.name.toLowerCase().includes(searchText.toLowerCase()) ||
    state.abbreviation.toLowerCase().includes(searchText.toLowerCase())
  );

  const pieData = stateData
    ? [
        { key: 1, value: stateData.casos, svg: { fill: '#600080' } },
        { key: 2, value: stateData.mortes, svg: { fill: '#9900cc' } },
      ]
    : [];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Buscar Estado</Text>
        <Text style={styles.text}>Digite o nome do estado ou selecione diretamente da lista.</Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.input}
            selectedValue={selectedState}
            onValueChange={(itemValue) => setSelectedState(itemValue)}
          >
            <Picker.Item label="Selecione um estado" value="" />
            {states.map((state) => (
              <Picker.Item key={state.abbreviation} label={state.name} value={state.abbreviation} />
            ))}
          </Picker>
          <TouchableOpacity style={styles.button} onPress={handleSearch}>
            <Text style={styles.buttonText}>Pesquisar</Text>
          </TouchableOpacity>
        </View>

        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      

        {stateData && (
          <View style={styles.stateData}>
            <Text style={styles.stateInfoText}>Casos: {stateData.casos}</Text>
            <Text style={styles.stateInfoText}>Mortes: {stateData.mortes}</Text>
            
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default MainNew;
