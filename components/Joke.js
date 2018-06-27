import React, { Component } from 'react';
import axios from 'axios';

import delay from '../functions/DelayFunction';
import {StyleSheet, View, Text} from 'react-native';

import * as Animatable from 'react-native-animatable';

export default class Joke extends Component {
  state = {
    setup: '',
    punchline: ''
  };

  componentDidMount() {
    axios
      .get(
        'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke'
      )
      .then(async res => {
        const setup = res.data.setup;
        const punchline = res.data.punchline;
        await delay(1500);
        await this.setState({ setup });
        await delay(5000);
        await this.setState({ punchline });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <View style={styles.container}>
        <Animatable.Text style={styles.h1} animation="slideInUp">{this.state.setup || 'Let me think of one...'}</Animatable.Text>
        {this.state.punchline.length ? <Animatable.Text style={styles.h2} animation="slideInUp">{this.state.punchline}</Animatable.Text> : <Text style={{color: 'transparent'}}>{"Nobody can see this"}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    h1: {
        fontSize: 30,
        marginBottom: 20
    },
    h2: {
        fontSize: 20
    }
})