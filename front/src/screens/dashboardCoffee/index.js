import {
    StyleSheet, Text, View, StatusBar, SafeAreaView,
    ScrollView, Image, TouchableOpacity
} from 'react-native';
import React from 'react';
import Coffee from '../../component/Coffee';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import api from '../../api';

const moment = require('moment');

export default function DashboardCoffee(props) {
    const { nome } = props.route?.params || {};

    const navigation = useNavigation();

    const bread = require('../../../../assets/coffee/bread.png')
    const biscoito = require('../../../../assets/coffee/biscoito.png')
    const choc = require('../../../../assets/coffee/choc.png')
    const iogurte = require('../../../../assets/coffee/danone.png')

    const saveCoffee = async (coffee) => {
        try{
            const formattedDate = moment().format('YYYY-MM-DD');
            const response = await api.post('/dbcoffee', {
                nome: nome, 
                coffee:coffee,
                date:formattedDate
            })
            console.log('seleção salva com sucesso:', response.data)
        }catch (error){
            console.error('erro ao salvar a seleção:', error)
        }
    };

    return (
        
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor="#DA251C" barStyle='light-content' />
            <ScrollView style={styles.view}>
            
                
                <Animatable.View delay={500} animation='fadeInLeft' style={styles.box_title}>
                    <Text style={styles.nameUser}>Olá {nome}, escolha:</Text>
                    <Text style={styles.title}>Café da manhã<Image source={require('../../../../assets/icon_coffee.png')}
                    /></Text>
                    
                </Animatable.View>

                <Animatable.View delay={500} animation='fadeInUp' style={styles.boxContent}>
                    <Coffee imageCoffe={bread} titleCoffee="Pão" saveCoffee={saveCoffee} nome={nome} />
                    <Coffee imageCoffe={biscoito} titleCoffee="Biscoito" saveCoffee={saveCoffee} nome={nome}/>
                    <Coffee imageCoffe={choc} titleCoffee="Chocolate quente" saveCoffee={saveCoffee} nome={nome}  /> 
                    <Coffee imageCoffe={iogurte} titleCoffee="Danone" saveCoffee={saveCoffee} nome={nome}/>
                    
                </Animatable.View>

                <Animatable.View style={styles.boxContinue} delay={1000} animation='fadeInLeft' >
                    <TouchableOpacity style={styles.buttonContinue} onPress={() => navigation.navigate('DashboardFood', {nome})}>
                        <Text style={styles.textContinue}>Seguir</Text><Image source={require('../../../../assets/setaRight.png')} />
                    </TouchableOpacity>
                </Animatable.View>

                </ScrollView>
        </SafeAreaView>
       
        
    )
}

const styles = StyleSheet.create({
    view:{
        
        width:'100%',
        height:'100%',
        
        
    },
    container: {
        flex:1,
        backgroundColor: '#DA251C',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        
    },
    nameUser:{
        color:'white',
        fontSize:25,
        textAlign: 'left',
        fontWeight: 'bold',
        marginLeft:10,
    },
    box_title: {
        height: 130,
        width:'100%',
        justifyContent:'center',
        flexDirection: 'column',
        gap: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 32,
        color: '#FFFFFF',
        textAlign:'center'
    },

    boxContent: {
        flex: 1,
        gap: 15,
        borderRadius: 40,
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        marginBottom: 30,
        paddingBottom: 30,
        paddingTop: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width:'99%'
    },
    boxContinue: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContinue: {
        backgroundColor: 'green',
        width: '90%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        borderRadius: 10,
        flexDirection: 'row',
        gap: 15
    },
    textContinue: {
        color: '#FFFFFF',
        fontSize: 27,
        fontWeight: 'bold'
    },
   
})