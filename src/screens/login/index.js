import React from 'react';
import { StyleSheet, View, TextInput, Image, Text} from 'react-native';

import Button from '../../component/Button';

export default function Login() {
  return (
    <View style={styles.container}>
        <Image
        source={require('../../../assets/logo_isl.webp')}
        style={styles.imageLogo}
        />
        <Text style={styles.textColor}>Olá, seja bem vindo ao meu primero aplicativo em React Native !</Text>
        
        <TextInput style={styles.inputMail} placeholder ="Nome" placeholderTextColor="#9EA0A4" />
        <Button buttonText="Entrar"/>
    </View>
  );
}

const styles = StyleSheet.create({

    container:{
        alignItems:'center'
    },
    inputMail:{
        borderWidth: 1,
        borderColor: '#FFFFFF',
        width:300,
        height: 45,
        marginBottom: 20,
        borderRadius: 5,
        padding: 10,
        color: '#FFFFFF',
        fontSize:15
  },
  imageLogo:{
    marginBottom: 80
  },
  textColor:{
    color: '#FFFFFF',
    width:300,
    marginBottom:25,
    fontSize: 18,
    textAlign:'center'
  }
});