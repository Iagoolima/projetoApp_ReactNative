import React from 'react';
import { StyleSheet, View, TextInput, Image, Text, KeyboardAvoidingView} from 'react-native';


import Button from '../../component/Button';

import * as Animatable from 'react-native-animatable';

export default function Login() {

  return (
    <View style={styles.container}>
      
        <View style={styles.boxTop}> 
          <Animatable.Image delay={1000}
          animation="flipInX"
          source={require('../../../../assets/logo_sesi_red.jpg')}
          style={styles.imageLogo}
          />
        </View>
        
        <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}>
          <Animatable.View  delay={700} animation='fadeInUp' style={styles.boxBottom}>
          
            <Text style={styles.textColor}>Bem vindo !</Text>
            
            
            <TextInput style={styles.inputUser} placeholder ="Digite o Usuário" placeholderTextColor="#9EA0A4" />
            <Button/>
          </Animatable.View>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:'space-evenly',
        backgroundColor:'#DA251C'
    },

    boxTop:{
      backgroundColor:'#DA251C',
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      
      
    },
    boxBottom:{
      backgroundColor: '#FFFFFF',
      flex:1,
      borderTopLeftRadius:40,
      borderTopRightRadius:40,
      alignItems:'center',
      justifyContent:'center',
      justifyContent:'space-around',
      paddingBottom: 10,

    },
    inputUser:{
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderBottomColor: '#c0c0c0',
        width:300,
        height: 25,
        color: '#000',
        fontSize:17,
        marginBottom:10
        
      
  },
  imageLogo:{
    width:210,
    height: 70
  },
  textColor:{
    fontWeight:'bold',
    color: '#000',
    width:300,
    marginBottom:15,
    fontSize: 25,
    textAlign:'center'
  }
});