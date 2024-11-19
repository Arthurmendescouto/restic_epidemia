import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        
      flexDirection:'column',
     
     
    },
    section:{
      backgroundColor:'black',
      flexDirection:'column',
      alignItems:'center',
      margin:5,
    },
    title:{
      fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 8, 
    color:'#fff',
    },
    text:{
      fontSize: 16, 
    color: '#fff',
    lineHeight: 24,
    },
    image:{
      width: '100%',
      height: 250,
      
      marginBottom: 10,
    },
  });