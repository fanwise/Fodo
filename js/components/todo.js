import React, { Component } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import Color from '../utils/color';

export default class Todo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Switch
          style={styles.switch}
          value={this.props.isCompleted}
          onValueChange={this.props.onToggleTodo} />
        <Text style={[styles.text, this.props.isCompleted && styles.textCompleted]}>{this.props.content}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  switch: {
    flex: 0.1,
    alignSelf: 'center',
  },
  text: {
    flex: 0.8,
    alignSelf: 'center',
    fontSize: 18,
  },
  textCompleted: {
    color: Color.grey,
    textDecorationLine: 'line-through',
  }
});
