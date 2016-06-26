import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class AndroidToolbar extends Component {
  render () {
    return (
      <Icon.ToolbarAndroid style={style.toolbar}
                      title={this.props.title}
                      navIconName="arrow-back"
                      iconSize={24}
                      iconColor="#FFFFFF"
                      onIconClicked={this.props.onIconClicked}
                      titleColor={'#FDFDFD'}
                      {...this.props}/>
    );
  }
}

const style = {
  toolbar: {
    backgroundColor: '#005F00',
    height: 56,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    elevation: 4
  }
}
