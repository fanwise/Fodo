import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FilterButton from './filterButton';
import Color from '../utils/color';
import { filters } from '../action'

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <View style={styles.container}>
        <FilterButton title={filters.ALL}></FilterButton>
        <FilterButton title={filters.COMPLETED}></FilterButton>
        <FilterButton title={filters.ACTIVED}></FilterButton>
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
