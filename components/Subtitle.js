import React from 'react';
import { View, Text } from 'react-native';
import { Colors } from '../utils/Colors';

export default class Subtitle extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{ this.props.text }</Text>
      </View>
    )
  }
}

const styles = {
  container: { height: 48, justifyContent: 'center' },
  text: { fontWeight: 'bold', color: Colors.primary_color }
}
