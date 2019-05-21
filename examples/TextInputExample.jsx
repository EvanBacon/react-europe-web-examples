import React, { Component } from 'react';
import { Text, TextInput, StyleSheet, View, Platform } from 'react-native';

export default class TextInputExample extends Component {
  state = { text: '' };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Type here to translate!"
          onChangeText={text => this.setState({ text })}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text
            .split(' ')
            .map(word => word && '🍕')
            .join(' ')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    height: 40,
    ...Platform.select({
      // Custom style props
      /**
        * View: https://github.com/necolas/react-native-web/blob/be5106f5d3d38bc35ec8f1f802a02603416ccd99/packages/react-native-web/src/exports/View/ViewStylePropTypes.js#L39-L61

        backdropFilter: string,
        backgroundAttachment: string,
        backgroundBlendMode: string,
        backgroundClip: string,
        backgroundImage: string,
        backgroundOrigin: oneOf(['border-box', 'content-box', 'padding-box']),
        backgroundPosition: string,
        backgroundRepeat: string,
        backgroundSize: string,
        boxShadow: string,
        clip: string,
        filter: string,
        outlineColor: ColorPropType,
        outlineOffset: stringOrNumber,
        outlineStyle: string,
        outlineWidth: stringOrNumber,
        overscrollBehavior: overscrollBehaviorType,
        overscrollBehaviorX: overscrollBehaviorType,
        overscrollBehaviorY: overscrollBehaviorType,
        scrollSnapAlign: string,
        scrollSnapType: string,
        WebkitMaskImage: string,
        WebkitOverflowScrolling: oneOf(['auto', 'touch'])

        * Text: https://github.com/necolas/react-native-web/blob/be5106f5d3d38bc35ec8f1f802a02603416ccd99/packages/react-native-web/src/exports/Text/TextStylePropTypes.js#L48-L63
        textIndent: numberOrString,
        textOverflow: string,
        textRendering: oneOf(['auto', 'geometricPrecision', 'optimizeLegibility', 'optimizeSpeed']),
        unicodeBidi: oneOf([
        'normal',
        'bidi-override',
        'embed',
        'isolate',
        'isolate-override',
        'plaintext'
        ]),
        whiteSpace: string,
        wordBreak: oneOf(['normal', 'break-all', 'break-word', 'keep-all']),
        wordWrap: string,
        MozOsxFontSmoothing: string,
        WebkitFontSmoothing: string

        * Input: https://github.com/necolas/react-native-web/blob/be5106f5d3d38bc35ec8f1f802a02603416ccd99/packages/react-native-web/src/exports/TextInput/TextInputStylePropTypes.js#L17-L18
        caretColor: ColorPropType,
        resize: oneOf(['none', 'vertical', 'horizontal', 'both'])
       */
      web: {
        // caretColor: 'orange',
        // outlineColor: 'red',
      },
      default: {},
    }),
  },
});
