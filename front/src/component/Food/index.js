import React, {useState} from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import api from '../../api';

export default function Food(props){

const[confirmed, setConfirmed] = useState(false);

    ///função que quando remove a confirmação ele remove o q foi inserido
    const handleButtonClick = async() =>{
        if(confirmed){
            setConfirmed(false);//se estiver falso, ele se mantem na cor vermelha
            try{
                await api.delete(`/dbfood/delete?nome=${props.nome}&food=${props.titleFood}`)
                console.log('seleção removida com sucesso do almoço:')
            }catch(error){
                console.error('Erro ao remover a seleção do almoço:',error);
            }
            } else {
            setConfirmed(true);//quando true o botao fica verde
            props.saveFood(props.titleFood)
        }
    }
    
    return(
        <Animatable.View  delay={1000} animation='flipInX' style={styles.box}>
            <View style={styles.boxImage}>
                <Image source={props.imageFood} style={styles.image}/>
            </View>

            <View style={styles.boxInput}>
                <Text style={styles.title}>{props.titleFood}</Text>
                <TouchableOpacity style={[styles.button, confirmed && styles.buttonConfirmed]}
                onPress={handleButtonClick}>

                    {/* botao que muda de cor de acordo com o click */}
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