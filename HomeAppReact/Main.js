import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {{flex :1 , backgroundColor : 'blue'}}>
        <Text> This is Main </Text>
      </View>
    );
  }
}
