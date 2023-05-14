import React from "react";
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import PropTypes from 'prop-types';

export default function Button(props){
    return(
        <TouchableOpacity style={styles.buttonColor}>
            <Text style={styles.textColor}>{props.buttonText}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonColor:{
        backgroundColor:'#BABABA',
        height: 50,
        width: 150,
        justifyContent:"center",
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#8C8C8C'
    },
    textColor:{
        color:'#000'
    }
})

Button.propTypes = {
    buttonText: PropTypes.string
}