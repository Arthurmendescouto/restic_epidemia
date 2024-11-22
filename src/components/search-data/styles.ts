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
    fontSize: 24,
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
  // Novos estilos para a busca de estados
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
    width: '90%',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
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
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
});