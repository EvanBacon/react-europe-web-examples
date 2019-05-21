import React from 'react';
import { StyleSheet, Text, View, LayoutAnimation } from 'react-native';

export default class StyleTransitionExample extends React.Component {
  state = {
    isActive: false,
  };

  render() {
    LayoutAnimation.easeInEaseOut();

    const { isActive } = this.state;
    return (
      <View style={styles.container}>
        <Text
          onPress={() => {
            this.setState({ isActive: !isActive });
          }}
          style={[
            styles.text,
            styles.transtion,
            {
              width: isActive ? '100%' : '30%',
              height: isActive ? '100%' : '30%',
            },
          ]}
        >
          Transition
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
    backgroundColor: 'orange',
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
  },
  transtion: {
    transitionDuration: '1s',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease-in-out',
  },
});
