import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class test1 extends Component {

    static navigationOptions = {
        drawerLabel: 'test1',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('./assert/house.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> fwefwewefew </Text>
      </View>
    );
  }
}
