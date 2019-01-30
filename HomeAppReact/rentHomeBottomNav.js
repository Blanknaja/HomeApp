import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
//import BottomNavigation from 'react-native-material-bottom-navigation'

import BottomNavigation, {
    FullTab
  } from 'react-native-material-bottom-navigation'

export default class rentHomeBottomNav extends Component {

  static navigationOptions = {
    drawerLabel: 'บ้านมือสอง',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./assert/house.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
///////////// Not to use////////

    tabs = [
        {
          key: 'games',
          icon: 'gamepad-variant',
          label: 'Games',
          barColor: '#388E3C',
          pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
          key: 'movies-tv',
          icon: 'movie',
          label: 'ดดำไดำได',
          barColor: '#B71C1C',
          pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
          key: 'music',
          icon: 'music-note',
          label: 'Music',
          barColor: '#E64A19',
          pressColor: 'rgba(255, 255, 255, 0.16)'
        }
      ]

        
       
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> บ้านชั้นนำ </Text>
        <BottomNavigation style = {{marginTop:400}}
          renderTab={this.renderTab}
          tabs={this.tabs}
        />
      </View>
    );
  }

  renderTab = ({ tab, isActive }) => {
    return (
      <FullTab
        key={tab.key}
        isActive={isActive}
        label={tab.label}
        renderIcon={this.renderIcon}
      />
    )
  }

  renderIcon = ({ isActive }) => {
    return <View />
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  BottomNavBar: {
    position: "absolute",
    bottom: 0,
    left: 0
  },
  bottom: {
    flexDirection: "column",
    flex: 1
  },
  icon: {
    width: 24,
    height: 24
  }
});
