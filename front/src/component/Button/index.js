import React from "react";
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import PropTypes from 'prop-types';

export default function Button(){
    const navigation = useNavigation();
    return(
        
    );
}

const styles = StyleSheet.create({
    buttonColor:{
        backgroundColor:'#DA251C',
        height: 60,
        width: 170,
        justifyContent:"center",
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#8C8C8C',
        marginBottom:3
    },
    textColor:{
        color:'#FFFFFF',
        fontWeight:"bold",
        fontSize:15
        
    }
})

Button.propTypes = {
    buttonText: PropTypes.string
}