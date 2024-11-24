import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { styles } from './styles';
import { VictoryPie } from 'victory-native';
import { Picker as RNPicker } from '@react-native-picker/picker'; // Importando o Picker

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
  const [selectedState, setSelectedState] = useState<string>('');
  const [stateData, setStateData] = useState<{ casos: number; mortes: number } | null>(null);
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold,
  });

  // Simulando os dados dos estados de exemplo
  const stateDataMap = {
   "AC": { "casos": 50000, "mortes": 6000 },
  "AL": { "casos": 85000, "mortes": 11000 },
  "AM": { "casos": 150000, "mortes": 16000 },
  "BA": { "casos": 250000, "mortes": 25000 },
  "CE": { "casos": 130000, "mortes": 20000 },
  "DF": { "casos": 200000, "mortes": 25000 },
  "ES": { "casos": 80000, "mortes": 11000 },
  "GO": { "casos": 130000, "mortes": 20000 },
  "MA": { "casos": 65000, "mortes": 12000 },
  "MT": { "casos": 100000, "mortes": 15000 },
  "MS": { "casos": 30000, "mortes": 5000 },
  "MG": { "casos": 300000, "mortes": 35000 },
  "PA": { "casos": 120000, "mortes": 22000 },
  "PB": { "casos": 70000, "mortes": 12000 },
  "PR": { "casos": 180000, "mortes": 25000 },
  "PE": { "casos": 150000, "mortes": 20000 },
  "PI": { "casos": 70000, "mortes": 12000 },
  "RJ": { "casos": 350000, "mortes": 45000 },
  "RN": { "casos": 70000, "mortes": 13000 },
  "RS": { "casos": 150000, "mortes": 20000 },
  "RO": { "casos": 50000, "mortes": 12000 },
  "RR": { "casos": 15000, "mortes": 3000 },
  "SC": { "casos": 170000, "mortes": 25000 },
  "SP": { "casos": 500000, "mortes": 60000 },
  "SE": { "casos": 50000, "mortes": 12000 },
  "TO": { "casos": 30000, "mortes": 5000 }
  };

  if (!fontsLoaded) {
    return null;
  }

  // Quando o estado é selecionado, busca os dados simulados
  const handleSearch = () => {
    if (selectedState) {
      setStateData(stateDataMap[selectedState] || null); // Atualiza com os dados do estado selecionado
    }
  };

  // Preparar os dados para o gráfico
  const pieData = stateData
    ? [
        { x: 'Casos', y: stateData.casos },
        { x: 'Mortes', y: stateData.mortes },
      ]
    : [];

  // Calculando as porcentagens
  const total = stateData ? stateData.casos + stateData.mortes : 0;
  const casosPercentage = total ? ((stateData?.casos / total) * 100).toFixed(2) : '0';
  const mortesPercentage = total ? ((stateData?.mortes / total) * 100).toFixed(2) : '0';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Busque o número de mortes por epidemia em qualquer estado do Brasil!</Text>

        <View style={styles.inputContainer}>
          {Platform.OS === 'web' ? (
            // Usando select na versão web
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              style={styles.input}
            >
              <option value="">Selecione um estado</option>
              {states.map((state) => (
                <option key={state.abbreviation} value={state.abbreviation}>
                  {state.name}
                </option>
              ))}
            </select>
          ) : (
            // Usando o Picker nativo para mobile
            <RNPicker
              style={styles.input}
              selectedValue={selectedState}
              onValueChange={(itemValue) => setSelectedState(itemValue)}
            >
              <RNPicker.Item label="Selecione um estado" value="" />
              {states.map((state) => (
                <RNPicker.Item key={state.abbreviation} label={state.name} value={state.abbreviation} />
              ))}
            </RNPicker>
          )}
          <TouchableOpacity style={styles.button} onPress={handleSearch}>
            <Text style={styles.buttonText}>Pesquisar</Text>
          </TouchableOpacity>
        </View>

        {stateData && (
          <View style={styles.stateData}>
            <VictoryPie
              data={pieData}
              colorScale={['#4A90E2', '#d7201a']} // Azul para casos e vermelho para mortes
            />

            <View style={styles.stateInfoText}>
              <Text style={styles.stateInfoText}>Número de casos: {stateData.casos}</Text>
              <Text style={styles.stateInfoText}>Número de mortes: {stateData.mortes}</Text>
              <Text style={styles.stateInfoText}>Mortes (%): {mortesPercentage}%</Text>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default MainNew;
