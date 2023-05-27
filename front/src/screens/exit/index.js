import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';


import { useNavigation } from '@react-navigation/native';

export default function Exit(props) {
    const handleLogout = () => {
        // Redireciona para a tela de login após 1 segundo
        setTimeout(() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          });
        }, 1000);
      }

    const { nome } = props.route.params;
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="white" barStyle='dark-content' />
            <Animatable.View delay={500} animation='flipInY' style={styles.box}>
                <Animatable.Image source={require('../../../../assets/exit.png')} style={styles.img} animation="pulse" // tipo de animação, neste exemplo, "bounce"
                    iterationCount="infinite" />
                <Text style={styles.titleOne}>Obrigado !</Text>
                <Text style={styles.title}>Até a Próxima {nome}!</Text>
                <TouchableOpacity style={styles.button} onPress={handleLogout}>
                    <Text style={styles.text}>Inicio</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    box: {
        width: '80%',
        height: '63%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'green',
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#FFFFFF',
        paddingTop: 50
    },
    titleOne: {
        fontSize: 35,
        color: 'white',
        paddingTop: 50,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 25,
        color: 'white',
        paddingTop: 40,

    },
    button: {
        backgroundColor: 'orange',
        height: 60,
        width: 170,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        borderRadius:10
    },
    text: {
        color: 'white',
        fontSize: 20
    }

})