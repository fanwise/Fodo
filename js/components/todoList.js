import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Todo from './todo'

export default class TodoList extends Component {
  renderItem = ({ item }) => {
    return <Todo isCompleted={item.isCompleted} content={item.content} onToggleTodo={() => null}></Todo>
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[{ key: 1, isCompleted: true, content: 'todo' }]}
          renderItem={this.renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginLeft: 16,
    marginRight: 16,
  }
});
