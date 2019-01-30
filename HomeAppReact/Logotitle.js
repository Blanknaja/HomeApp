import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Logotitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Image
        source={require('./assert/house.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}
