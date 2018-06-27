import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from '../components/MicroComps/Button'

export default class Menu extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>What would you like to see?</Text>
                <Button text="A little about myself."/>
                <Button text="What I am even good at."/>
                <Button text="The projects I have worked on."/>
                <Button text="A joke!"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold'
      }
});