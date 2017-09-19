import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FilterButton from './filterButton';
import Color from '../utils/color';


export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <View style={styles.container}>
        <FilterButton title={'ALL'}></FilterButton>
        <FilterButton title={'COMPLETED'}></FilterButton>
        <FilterButton title={'ACTIVE'}></FilterButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Color.lightBule,
  }
});
