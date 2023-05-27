import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Image, Text, KeyboardAvoidingView, TouchableOpacity, Platform } from 'react-native';

import {useForm, controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

import { yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

import * as Animatable from 'react-native-animatable';
import { Controller } from 'react-hook-form';

import api from '../../api';



const schema = yup.object({
  
  user:yup.string().max(5, 'Máximo de 5 digitos'),
})

export default function Login() {
  const navigation = useNavigation();
  const [passwordError, setPasswordError] = useState(false);

  const {control, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  });


  function handleSignIn(data) {
    api.post('/login', data)
    .then(response => {
      const { user, nome } = response.data;
      console.log(`Usuário: ${user}, Nome: ${nome}`);
      navigation.navigate('DashboardCoffee', {nome});
    })
    .catch(error => {
      console.error(error);
      if (error.response && error.response.status === 401) {
        setPasswordError(true);
      }
    });
}
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

            <Controller
            control={control}
            name='user'
            render={({field:{onChange, onBlur, value} })=>(
              <TextInput style={styles.inputUser}
               placeholder ="Digite seu R.A"
               placeholderTextColor="#9EA0A4"
               keyboardType="numeric"

               onBlur={onBlur}
               onChangeText={onChange} 
               value={value} /> 
            )}
            />

            {errors.user && <Text style={styles.textError}>{errors.user?.message}</Text>}
            {passwordError && <Text style={styles.textError}>Senha inválida</Text>}
            
            <TouchableOpacity style={styles.buttonColor} onPress={handleSubmit(handleSignIn) }>
              <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>

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
        paddingBottom:5
        
      
  },
  imageLogo:{
    width:210,
    height: 70
  },
  textColor:{
    fontWeight:'bold',
    color: '#000',
    width:300,
    fontSize: 25,
    textAlign:'center'
  },
  buttonColor:{
    backgroundColor:'#DA251C',
    height: 60,
    width: 170,
    justifyContent:"center",
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#8C8C8C',
    marginBottom:5
},
textButton:{
    color:'#FFFFFF',
    fontWeight:"bold",
    fontSize:15
    
},
textError:{
  color:'red',
  padding:0
}
});