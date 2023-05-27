import React, {useState} from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Coffee(props){

    const[confirmed, setConfirmed] = useState(false);
    const[value, setValue] = useState(0);

    const handleButtonClick = () =>{
        if(confirmed){
            setValue(0);
            setConfirmed(false);
        } else {
            setValue(1);
            setConfirmed(true);
        }
    }
    
    return(
        <Animatable.View  delay={1000} animation='flipInX' style={styles.box}>
            <View style={styles.boxImage}>
                <Image source={props.imageCoffe} style={styles.image}/>
            </View>

            <View style={styles.boxInput}>
                <Text style={styles.title}>{props.titleCoffee}</Text>
                <TouchableOpacity style={[styles.button, confirmed && styles.buttonConfirmed]}
                onPress={handleButtonClick}>

                    <Text style={styles.confirm}>{confirmed ? 'Confirmado' : 'Confirmar'}</Text>
                </TouchableOpacity>
            
            </View>
        </Animatable.View>

    );
}


const styles = StyleSheet.create({
    box:{
        height: 200,
        width: '95%',
        borderWidth: 3,
        borderRadius: 40,
        borderColor: '#D3D3D3',
        flexDirection: 'row',
        alignItems: 'center'
    },
    boxImage:{
        height:'90%',
        width:'50%',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
        width:125,
        height:125
    },
    boxInput:{
        height:'90%',
        width:'45%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title:{
        color: '#000',
        fontSize: 23,
        fontWeight:'bold',
        textAlign: 'center'
    },
    button:{
        backgroundColor: '#DA251C',
        width:150,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
    },
    buttonConfirmed:{
        backgroundColor: 'green'
    },
    confirm:{
        color: '#FFFFFF',
        fontSize: 15
    }


})