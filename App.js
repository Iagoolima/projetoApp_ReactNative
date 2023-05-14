import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/screens/login';


export default function App() {
  return (
    <View style={styles.container}>
        <Login/>
      <StatusBar style="dark"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#DBDBDB',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
