import React, { Component } from 'react';
import { MKButton } from 'react-native-material-kit';
import { Text, View } from 'react-native';
import { Colors } from '../utils/Colors';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let buttonStyle = {
      marginBottom: 8
    };
    if (this.props.flat) {
      buttonStyle.elevation = 0;
    }
    return (
      <MKButton
        onPress={this.props.onPress}
        rippleColor={this.props.rippleColor}
        backgroundColor={this.props.flat ? Colors.transparent : this.props.primaryColor}
        style={[styles.default, buttonStyle, this.props.style]}>
        <View style={styles.innerContainer}>
          { this.props.children }
          <Text pointerEvents="none" style={{ fontWeight: 'bold', color: (this.props.flat ? this.props.primaryColor : this.props.textColor), marginLeft: (this.props.children ? 8 : 0) }}>{ this.props.text }</Text>
        </View>
      </MKButton>
    )
  }
}

Button.defaultProps = {
  backgroundColor: Colors.white,
  rippleColor: Colors.light_ripple_color,
  textColor: Colors.default_text,
  text: 'HELLO WORLD',
  flat: false
};

const styles = {
  default: {
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 3,
    elevation: 4,
    marginLeft: 4,
    marginRight: 4
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
}
