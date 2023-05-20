import React from "react";
import {View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function ContentCoffee(props){

    

    return(
        <View style={styles.container}>
            <View style={styles.boxImage}>
                <View style={styles.image}><Text>{props.imageCoffe}</Text></View>
            </View>

            <View style={styles.boxInput}>
                <View style={styles.title}><Text>{props.titleCoffee}</Text></View>
                <TouchableOpacity>
                    <Text>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>

        

    );
}


const styles = StyleSheet.create({
   
})