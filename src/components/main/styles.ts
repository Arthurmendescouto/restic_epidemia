import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { Poppins_700Bold } from './../../../node_modules/@expo-google-fonts/poppins/index';




export const styles = StyleSheet.create({
    container: {
        
      flexDirection:'column',
      backgroundColor:'#FFFFFF',
     
    },
    section:{
      
      flexDirection:'column',
      alignItems:'center',
      margin:5,
    },
    title:{
      fontSize: 24,  
    marginBottom: 8, 
    color:'#000',
    fontFamily:'Poppins_700Bold'
    },
    text:{
      fontSize: 16, 
    color: '#000',
    lineHeight: 24,
    fontFamily:'Poppins_600SemiBold',

    },
    image:{
      width: '100%',
      objectFit:'contain',
      height: 250,
      
      marginBottom: 10,
    },
    button:{
        margin:20,
        backgroundColor:'#0060F6',
        width:'90%',
        justifyContent:'center',
        alignItems:'center',
        padding:18,
        borderRadius:10,
        
      },
    buttonText:{
      color:'white',
      fontWeight:'bold',
      fontFamily:'Poppins_700Bold',
    },
  });