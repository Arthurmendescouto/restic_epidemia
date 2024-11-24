import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  section: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 5,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    color: '#000',
    fontFamily: 'Poppins_700Bold',
  },
  text: {
    fontSize: 16,
    color: '#000',
    lineHeight: 24,
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#000',
    lineHeight: 24,
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    objectFit: 'contain',
    height: 250,
    marginBottom: 10,
  },
  button: {
    margin: 20,
    backgroundColor: '#F60000',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Poppins_700Bold',
  },
  // Estilos ajustados para a busca de estados
  inputContainer: {
    backgroundColor:'#fff',
    flexDirection: 'column',  // Altere para coluna para evitar problemas com o layout do Picker
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
    width: '100%',  
  },
  input: {
    
    width: '90%',  // Aumente a largura do Picker para 90%
    height: 60,  // Aumente a altura para tornar o Picker mais visível
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#d3d3d3',
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    marginRight: 10,
  },
  listContainer: {
    width: '90%',
    marginTop: 10,
  },
  stateItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    marginBottom: 5,
  },
  selectedState: {
    backgroundColor: '#d1eaff',
  },
  stateText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Poppins_600SemiBold',
  },

  // Estilo para exibição dos dados do estado
  stateData: {
    marginTop: -20,  // Ajuste da margem para garantir que o conteúdo não se sobreponha
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '100%',
    // Remover a altura fixa
    alignItems: 'center',
  },
  stateInfoText: {
    justifyContent: 'center',
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    color: '#333',
    marginBottom: 10,
  },
  graphic: {
    flex: 1,
    justifyContent: 'center',
  },
});
