import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './Estilo';

export default function Inicial({navigation}) {
  return (
    <View style={styles.container}>
      <Text>ESTILO EXPORTADO</Text>
      <StatusBar style="auto" />
    </View>
  );
}


