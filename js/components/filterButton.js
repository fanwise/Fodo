import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Color from '../utils/color';

export default class FilterButton extends Component {
  onPressButton = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.touchableHighlight} underlayColor={Color.button} onPress={this.onPressButton}>
          <Text style={styles.text}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  touchableHighlight: {
    flexGrow: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: Color.white,
    fontSize: 16,
  }
});

