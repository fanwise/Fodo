import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import configureStore from './store';
import Main from './main';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({isLoading: false})),
    }
  }
  
  render() {
    if(this.state.isLoading) {
      return null;
    }
    return (
      <Provider store = {this.state.store}>
        <Main statusBarHeight={this.props.statusBarHeight}></Main>
      </Provider>
    );
  }
}
