import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Button from '../components/MicroComps/Button';
import MenuModal from '../components/MicroComps/Modal';
import Joke from '../components/Joke';

export default class Menu extends React.Component {
    state = {
        jokeModal: false
    }

    toggleModal = (modal) => {
        this.setState({[modal]: !this.state[modal]});
    }

    render() {
        return (
            <View><Animatable.View animation="zoomIn" style={styles.container}>
                <Text style={styles.header}>What would you like to see?</Text>
                <Button text="A little about myself."/>
                <Button text="What I am even good at."/>
                <Button text="The projects I have worked on."/>
                <Button text="A joke!" connectedModal="jokeModal" toggleModal={this.toggleModal}/>
            </Animatable.View>
            <MenuModal text='Here is the joke modal!' name='jokeModal' isOpen={this.state.jokeModal} toggleModal={this.toggleModal}><Joke /></MenuModal>
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