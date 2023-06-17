import {
    StyleSheet, Text, View, StatusBar, SafeAreaView,
    ScrollView, Image, TouchableOpacity
} from 'react-native';
import React from 'react';

import Food from '../../component/Food';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import api from '../../api';

import {
    frango,
    bife, 
    batata,
    macarrao
} from '../../component/imageImport';


const moment = require('moment');// elemtno que proporcionar o horario


export default function DashboardFood(props) {
    const { nome } = props.route?.params || {};

    const navigation = useNavigation();
 //metodo utilizado para salvar o alimento no banco de dados quando clicado
    const saveFood  = async(food) =>{
        try{
            const formattedDate = moment(). format('YYYY-MM-DD')// aqui utilizando o moment para pegar data 
            const response = await api.post('/dbfood',{
                nome: nome,
                food: food,
                date: formattedDate
            })
            console.log('Seleção salva com sucesso do almoço:', response.data)
        }catch(error){
            console.error('erro ao salvar a seleção do almoço:', error)
        }
    };

    return (

        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#DA251C" barStyle='light-content' />
            <ScrollView style={styles.view}>
                <Animatable.View delay={500} animation='fadeInLeft' style={styles.box_title}>

                    <Text style={styles.title}>Almoço</Text>
                    <Image source={require('../../../../assets/icon_food.png')}
                    />
                </Animatable.View>

                <Animatable.View delay={500} animation='fadeInUp' style={styles.boxContent}>
                    <Food imageFood={frango} titleFood="Frango" saveFood={saveFood} nome={nome} />
                    <Food imageFood={bife} titleFood="Bife de carne" saveFood={saveFood} nome={nome} />
                    <Food imageFood={batata} titleFood="Batata" saveFood={saveFood} nome={nome}/>
                    <Food imageFood={macarrao} titleFood="Macarrão" saveFood={saveFood} nome={nome}/>

                </Animatable.View>

                <Animatable.View style={styles.boxOption} delay={1000} animation='fadeInUp'>
                    <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('DashboardCoffee')}>
                        <Image source={require('../../../../assets/setaLeft.png')} /><Text style={styles.textOption}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContinue} onPress={() => navigation.navigate('Exit', { nome })}>
                        <Text style={styles.textOption}>Finalizar</Text><Image source={require('../../../../assets/icon_finalizar.png')} />
                    </TouchableOpacity>
                </Animatable.View>
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',

    },
    container: {
        flex: 1,
        backgroundColor: '#DA251C',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',

    },
    box_title: {
        height: 130,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5
    },
    title: {
        fontWeight: 'bold',
        fontSize: 32,
        color: '#FFFFFF',
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
        width: '100%'
    },
    boxOption: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        paddingLeft: 5,
        paddingRight: 5,
        flexDirection: 'row'
    },
    buttonContinue: {
        backgroundColor: 'green',
        width: '45%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        borderRadius: 10,
        flexDirection: 'row',
        gap: 5
    },
    buttonBack: {
        backgroundColor: 'orange',
        width: '45%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        borderRadius: 10,
        flexDirection: 'row',
        gap: 5
    },
    textOption: {
        color: '#FFFFFF',
        fontSize: 27,
        fontWeight: 'bold'
    }
})