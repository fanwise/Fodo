import React, { Component } from 'react';
import { View } from 'react-native';
import Dimensions from 'Dimensions';
import AddTodo from './container/addTodo';
import TodoListContainer from './container/todoListContainer';
import FilterContainer from './container/filterContainer';

var { height, width } = Dimensions.get('window');

export default class Main extends Component {
  containerStyle = () => {
    return {
      flexGrow: 1,
      marginTop: this.props.statusBarHeight,
      height: height - this.props.statusBarHeight,
    }
  }

  render() {
    return (
      <View style={this.containerStyle()}>
        <AddTodo></AddTodo>
        <TodoListContainer></TodoListContainer>
        <FilterContainer></FilterContainer>
      </View>
    );
  }
}
