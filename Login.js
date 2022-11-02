import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './Estilo';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Text>LOGIN</Text>
      <StatusBar style="auto" />
    </View>
  );
}


