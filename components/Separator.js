import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Colors } from '../utils/Colors';

export default class Separator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dash}/>
        <Text style={styles.text}>{this.props.text}</Text>
        <View style={styles.dash}/>
      </View>
    )
  }
}

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 16
  },
  dash: {
    flex: 0.45,
    height: 1,
    borderWidth: 0.5,
    borderColor: Colors.separator,
    borderStyle: 'solid'
  },
  text: {
    marginLeft: 8,
    marginRight: 8,
    fontWeight: 'bold',
    fontSize: 18
  }
}
