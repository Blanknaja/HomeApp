import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class testDraw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1 , backgroundColor : 'yellow'}}>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
