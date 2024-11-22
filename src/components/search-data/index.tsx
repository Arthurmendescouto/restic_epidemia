import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { styles } from './styles';

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
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const filteredStates = states.filter((state) =>
    state.name.toLowerCase().includes(searchText.toLowerCase()) ||
    state.abbreviation.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearch = () => {
    if (selectedState) {
      console.log(`Estado selecionado: ${selectedState}`);
      // Navegar para a próxima tela ou exibir resultados (API)
    } else {
      console.log('Nenhum estado selecionado.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Buscar Estado</Text>
        <Text style={styles.text}>
          Digite o nome do estado ou selecione diretamente da lista.
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite o estado ou sigla (Ex: SP, São Paulo)"
            value={searchText}
            onChangeText={(text) => {
              setSearchText(text);
              setSelectedState(null); // Limpa seleção anterior ao digitar
            }}
          />
          <TouchableOpacity style={styles.button} onPress={handleSearch}>
            <Text style={styles.buttonText}>Pesquisar</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={filteredStates}
          keyExtractor={(item) => item.abbreviation}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.stateItem,
                selectedState === item.name && styles.selectedState,
              ]}
              onPress={() => {
                setSelectedState(item.name);
                setSearchText(item.name); // Atualiza o input com o nome completo
              }}
            >
              <Text style={styles.stateText}>{item.name} ({item.abbreviation})</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default MainNew;