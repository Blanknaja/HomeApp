import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class TownHouse extends Component {
    static navigationOptions = {
        title: 'บ้านใหม่',
      };
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1 ,backgroundColor : 'red'}}>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
