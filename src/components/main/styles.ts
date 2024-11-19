import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';




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
      height: 250,
      
      marginBottom: 10,
    },
  });