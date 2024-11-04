import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import "@expo/metro-runtime";
import {styles} from './styles'
export function Main(){
    return(
        <View style={styles.container}>
        
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>

        

    )
}
