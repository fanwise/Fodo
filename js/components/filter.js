import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FilterButton from './filterButton';
import Color from '../utils/color';
import { filters } from '../action'

export default class Filter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FilterButton activieFilter={this.props.filter} title={filters.ALL} setFilter={() => this.props.setFilter(filters.ALL)}></FilterButton>
        <FilterButton activieFilter={this.props.filter} title={filters.COMPLETED} setFilter={() => this.props.setFilter(filters.COMPLETED)}></FilterButton>
        <FilterButton activieFilter={this.props.filter} title={filters.ACTIVED} setFilter={() => this.props.setFilter(filters.ACTIVED)}></FilterButton>
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
