import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Color from '../utils/color';

export default class FilterButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.touchableHighlight} underlayColor={Color.button} onPress={this.props.setFilter}>
          <Text style={this.props.title === this.props.activieFilter ? styles.selectedText : styles.text}>{this.props.title}</Text>
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
  },
  selectedText: {
    color: Color.button,
    fontSize: 16,
  }
});

