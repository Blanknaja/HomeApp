import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class NewHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {{backgroundColor : "#fff"}} >
        <Text> textInComponent </Text>
      </View>
    );
  }
}
