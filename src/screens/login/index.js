import React from 'react';
import { StyleSheet, View, TextInput, Image, Text} from 'react-native';

import Button from '../../component/Button';

export default function Login() {
  return (
    <View style={styles.container}>
        <Image
        source={require('../../../assets/logo_sesi_red.jpg')}
        style={styles.imageLogo}
        />
        <Text style={styles.textColor}>Bem vindo !</Text>
        
        <TextInput style={styles.inputMail} placeholder ="Usuário" placeholderTextColor="#9EA0A4" />
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
        borderColor: '#DBDBDB',
        borderBottomColor: '#000',
        width:300,
        height: 25,
        marginBottom: 20,
        color: '#000',
        fontSize:15
  },
  imageLogo:{
    marginBottom: 50,
    width:210,
    height: 70
  },
  textColor:{
    color: '#000',
    width:300,
    marginBottom:25,
    fontSize: 18,
    textAlign:'center'
  }
});