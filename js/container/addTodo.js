import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';
import Color from '../utils/color';
import { addTodo } from '../action';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  onPressAddButton = () => {
    if (this.state.text.trim()) {
      this.props.dispatch(addTodo(this.state.text));
      this.refs['textInput'].setNativeProps({text: ''});
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput ref={'textInput'}
          style={styles.textInput}
          placeholder={'Add Todo'}
          onChangeText={(text) => this.setState({ text })}
        />
        <TouchableHighlight style={styles.touchableHighlight} underlayColor={Color.buttonActivity} onPress={this.onPressAddButton}>
          <Text style={styles.text}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    marginTop: 10,
    marginRight: 16,
    marginBottom: 10,
    marginLeft: 16,
  },
  textInput: {
    flex: 0.8,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Color.grey,
  },
  touchableHighlight: {
    flex: 0.15,
    borderRadius: 5,
    backgroundColor: Color.button,
    justifyContent: 'center',
  },
  text: {
    color: Color.white,
    fontSize: 18,
    alignSelf: 'center'
  }
});

export default connect()(AddTodo)
