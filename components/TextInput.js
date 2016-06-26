import React from 'react';
import { View, Text, TextInput as ReactTextInput } from 'react-native';
import { Colors } from '../utils/Colors';

export default class TextInput extends React.Component {
  getLabel() {
    if (this.props.showLabel) {
      this.additionalStyle.paddingTop = 8;
      return (
        <Text>
          {this.props.label}
        </Text>
      )
    }
    return;
  }
  render() {
    this.additionalStyle = {};
    return (
      <View style={[styles.container, this.additionalStyle]}>
        {this.getLabel()}
        <ReactTextInput
          style={[styles.input, this.props.style]}
          onChangeText={this.props.onChangeText}
          value={this.props.text}
          keyboardType={this.props.keyboardType}
          secureTextEntry={this.props.password}
          placeholder={this.props.placeholder}
          underlineColorAndroid={Colors.primary_color}>
          {this.props.children}
        </ReactTextInput>
      </View>
    )
  }
}

TextInput.defaultProps = {
  text: "",
  keyboardType: "default",
  placeholder: "My input text",
  showLabel: true
};

const styles = {
  container: {
    paddingTop: 16,
    flex: 1
  },
  input: {
    height: 48,
    fontSize: 16,
    flex: 1
  }
}
