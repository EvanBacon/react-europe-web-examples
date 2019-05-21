import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class StyleTransitionExample extends React.Component {
  state = {
    isActive: false,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text
          onPress={() => {
            this.setState({ isActive: !this.state.isActive });
          }}
          style={[
            styles.text,
            styles.transtion,
            { color: this.state.isActive ? 'blue' : 'orange' },
          ]}
        >
          Click me bro
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
  transtion: {
    transitionDuration: '1s',
    transitionProperty: 'color',
    transitionTimingFunction: 'ease-in-out',
  },
});
