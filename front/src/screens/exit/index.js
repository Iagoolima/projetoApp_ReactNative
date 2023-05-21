import React, {useState} from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity,StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';


export default function Exit(){
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="white" barStyle='dark-content'/>
            <Animatable.View delay={500} animation='flipInY' style={styles.box}>
                <Animatable.Image source={require('../../../../assets/exit.png')} style={styles.img} animation="pulse" // tipo de animação, neste exemplo, "bounce"
                iterationCount="infinite" />
                <Text style={styles.titleOne}>Obrigado !</Text>
                <Text style={styles.title}>Até a proxima</Text> 
                
            </Animatable.View> 
           
        </View>

    );
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    box:{
        width:'80%',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'green',
        borderRadius:40,
        borderWidth:2,
        borderColor:'#FFFFFF',
        paddingTop:50
    },
    titleOne:{
        fontSize:35,
        color:'white',
        paddingTop:50,
        fontWeight:'bold'
    },
    title:{
        fontSize:25,
        color:'white',
        paddingTop:40,
        
    },

})