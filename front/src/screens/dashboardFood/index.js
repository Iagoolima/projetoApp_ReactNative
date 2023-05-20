import {
    StyleSheet, Text, View, StatusBar, SafeAreaView,
    ScrollView, Image, TouchableOpacity
} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';



export default function DashboardFood() {
    return(
        <View style={styles.teste}>
            <Text>Oi mo, mostra a teta por favorzinho rsrs</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    teste:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    }
})