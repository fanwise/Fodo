import React, { Component } from 'react';
import { View } from 'react-native';
import Main from './main';

export default class App extends Component {
  render() {
    return (
      <View>
        <Main statusBarHeight={this.props.statusBarHeight}></Main>
      </View>
    );
  }
}
