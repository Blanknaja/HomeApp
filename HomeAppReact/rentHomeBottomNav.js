import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
//import BottomNavigation from 'react-native-material-bottom-navigation'

import BottomNavigation, {
    FullTab
  } from 'react-native-material-bottom-navigation'

export default class rentHomeBottomNav extends Component {


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
        <Text> Renthome </Text>
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
