import React, { Component } from 'react';
import { StyleSheet, Text, View, PanResponder, Animated, Dimensions  } from 'react-native';
import * as Animatable from 'react-native-animatable';
import delay from '../functions/DelayFunction';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class LoadingScreen extends Component {
  constructor() {
    super();
    this.panResponder;
    this.state = {
      isReady: false,
      headerGone: false,
      Xposition: new Animated.Value(0),
      CardView_Opacity: new Animated.Value(1),
    };
    this.CardView_Opacity = new Animated.Value(1)
  }
  

  componentWillMount()
  {
    this.panResponder = PanResponder.create(
    {
      onStartShouldSetPanResponder: (evt, gestureState) => false,
 
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
 
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
 
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
 
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dx <= 0) this.state.Xposition.setValue(gestureState.dx);
      },
 
      onPanResponderRelease: (evt, gestureState) =>
      {
        if( gestureState.dx < SCREEN_WIDTH - 200 && gestureState.dx > -SCREEN_WIDTH + 200 ) {
          Animated.spring( this.state.Xposition,
          {
            toValue: 0,
            speed: 5,
            bounciness: 10,
          }, { useNativeDriver: true }).start();
        }
        else
        {
          Animated.parallel(
          [          
            Animated.timing( this.state.Xposition,
            {
              toValue: -SCREEN_WIDTH,
              duration: 200
            }),
 
            Animated.timing( this.CardView_Opacity,
            {
              toValue: 0,
              duration: 200
            })
          ], { useNativeDriver: true }).start(() => this.props.handleReady());          
        }
      }
    });
  }

  async componentDidMount() {
    await delay(3500);
    this.setState({ isReady: true });
  }
  render() {
    return (
      <Animated.View {...this.panResponder.panHandlers} 
      style={{ 
        opacity: this.CardView_Opacity, 
        transform: [{ translateX: this.state.Xposition }]}
        }>
        <Text style={styles.header}>Chris Atoki Codes</Text>
        {this.state.isReady ? <Animatable.View animation="slideInUp" style={{marginVertical: 0}}><Animatable.Text animation="slideOutRight" iterationCount="infinite" direction="alternate" delay={1000}>{"<-- Swipe that way!"}</Animatable.Text></Animatable.View> : <Animatable.Text animation="fadeOutDown" delay={2500}>{"Full Stack Mobile Developer"}</Animatable.Text>}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    fontWeight: 'bold'
  }
});
