import {
    StyleSheet, Text, View, StatusBar, SafeAreaView,
    ScrollView, Image, TouchableOpacity
} from 'react-native';
import React from 'react';
import Coffee from '../../component/Coffee';


import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';



export default function DashboardCoffee() {

    const navigation = useNavigation();

    const bread = require('../../../../assets/coffee/bread.png')
    const biscoito = require('../../../../assets/coffee/biscoito.png')
    const choc = require('../../../../assets/coffee/choc.png')
    const iogurte = require('../../../../assets/coffee/danone.png')


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <StatusBar backgroundColor="#DA251C" barStyle='light-content' />

                <Animatable.View delay={1000} animation='fadeInLeft' style={styles.box_title}>

                    <Text style={styles.title}>Café da manhã</Text>
                    <Image source={require('../../../../assets/icon_coffee.png')}
                    />
                </Animatable.View>

                <Animatable.View delay={1200} animation='fadeInUp' style={styles.boxContent}>
                    <Coffee imageCoffe={bread} titleCoffee="Pão" />
                    <Coffee imageCoffe={biscoito} titleCoffee="Biscoito" />
                    <Coffee imageCoffe={choc} titleCoffee="Chocolate quente" />
                    <Coffee imageCoffe={iogurte} titleCoffee="Danone" />
                </Animatable.View>

                <Animatable.View style={styles.boxContinue} delay={1000} animation='fadeInLeft' >
                    <TouchableOpacity style={styles.buttonContinue} onPress={() => navigation.navigate('DashboardFood')}>
                        <Text style={styles.textContinue}>Seguir</Text><Image source={require('../../../../assets/setaRight.png')} />
                    </TouchableOpacity>
                </Animatable.View>



            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DA251C',
        padding: 5


    },
    box_title: {
        height: 110,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
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
        alignItems: 'center'
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
    }
})