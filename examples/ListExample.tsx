import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const data = [{ key: 'Brent' }, { key: 'Vincent' }, { key: 'Evan' }];

export default class App extends React.Component {
  renderItem = ({ item }) => <Text style={styles.item}>{item.key}</Text>;

  render() {
    return <FlatList data={data} renderItem={this.renderItem} />;
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
