import React from 'react'

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default Button = (props) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white', textAlign: 'center'}}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 90,
        width: 250,
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 10,
        shadowOffset:{  width: 5,  height: 5,  },
        shadowColor: 'grey',
        shadowOpacity: 1.0,
        marginVertical: 20
    }
})