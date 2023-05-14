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
        backgroundColor:'#6a0dad',
        height: 50,
        width: 150,
        justifyContent:"center",
        alignItems: 'center',
        borderRadius: 20
    },
    textColor:{
        color:'#FFFFFF'
    }
})

Button.propTypes = {
    buttonText: PropTypes.string
}