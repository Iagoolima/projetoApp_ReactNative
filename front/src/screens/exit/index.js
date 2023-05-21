import React, {useState} from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';


export default function Exit(){
    return(
        <View style={styles.container}>
            <Animatable.View delay={1200} animation='fadeInUp' style={styles.box}>
                <Image source={require('../../../../assets/exit.png')} style={styles.img} />
                <Text style={styles.title}></Text>
            </Animatable.View>
           
        </View>

    );
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DA251C'
    },
    box:{
        width:'80%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'green',
        borderRadius:40,
        borderWidth:2,
        borderColor:'#FFFFFF',
        paddingTop:20
    },
    title:{
        fontSize:25,
        color:'white'
    }
})