import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoadingScreen from './components/LoadingScreen';
import Menu from './components/Menu';

export default class App extends React.Component {

  state = {
    isReady: false
  }

  handleReady = () => {
    this.setState({isReady: true});
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isReady ? <Menu /> : <LoadingScreen handleReady={this.handleReady}/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
