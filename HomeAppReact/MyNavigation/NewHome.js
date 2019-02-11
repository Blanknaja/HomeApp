import React, { Component } from 'react';
import { 
    View, 
    Text ,
    StyleSheet,
Button} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from "react-native-responsive-screen";
import BottomNavigation, {
    FullTab
  } from 'react-native-material-bottom-navigation'

  import { Icon } from 'react-native-elements'

export default class NewHome extends Component {
    static navigationOptions = {
        title: 'บ้านใหม่',
      };

      tabs = [
        {
          key: 'บ้านใหม่',
          icon: 'gamepad-variant',
          label: 'บ้านใหม่',
          barColor: '#388E3C',
          pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
          key: 'บ้านชั้นนำ',
          icon: 'movie',
          label: 'บ้านชั้นนำ',
          barColor: '#B71C1C',
          pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
          key: 'บ้านมือสอง',
          icon: 'music-note',
          label: 'บ้านมือสอง',
          barColor: '#E64A19',
          pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'ข่าว',
            icon: 'music-note',
            label: 'ข่าว',
            barColor: '#E64A19',
            pressColor: 'rgba(255, 255, 255, 0.16)'
          },
          {
            key: 'อีเวนท์',
            icon: 'music-note',
            label: 'อีเวนท์',
            barColor: '#E64A19',
            pressColor: 'rgba(255, 255, 255, 0.16)'
          }
      ]
  constructor(props) {
    super(props);
    this.state = {
        activeTab: 'บ้านใหม่'
    };
  }
  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="white" name={icon} />
  )

  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  )
  handleTabPress = (newTab, oldTab) => {
    this.setState({ activeTab: newTab.key })

    if (newTab.key == "บ้านใหม่") {
        this.props.navigation.navigate("NewHome",{
        });
        this.setState({
          activeTab: "บ้านใหม่"
        });
      } else if (newTab.key == "บ้านชั้นนำ") {
        this.props.navigation.navigate("TopHome",{
           
        });
        this.setState({
          activeTab: "บ้านใหม่"
        });
      } else if (newTab.key == "บ้านมือสอง") {
        this.props.navigation.navigate("SecondHouseBottomNav");
        this.setState({ activeTab: "บ้านใหม่" });
      } else if (newTab.key == "news") {
        this.props.navigation.navigate("NewsBottomNav");
        this.setState({ activeTab: "บ้านใหม่" });
      } else if (newTab.key == "event") {
        this.props.navigation.navigate("EventBottomNav");
        this.setState({ activeTab: "บ้านใหม่" });
      }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('TopHome',{
              v1: 'v1',
              v2: 'v2'
          })}
        /> */}
        <BottomNavigation
          onTabPress={this.handleTabPress}
          renderTab={this.renderTab}
          tabs={this.tabs}
        />
        <Text>Next Home</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "#fff"
    },
    header: {
      height: hp("15%"),
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      backgroundColor: "#03A9F4",
      zIndex: 10
    },
    content: {
      flex: 10,
      backgroundColor: "#fff",
      //alignItems: "center",
      width: wp("100%"),
      height: hp("100%")
    },
    vSearch: {
      //position:'absolute',
      // backgroundColor: "red",
      width: wp("100%"),
      //height: hp("15%"),
      marginTop: hp("15%")
    },
    footer: {
      height: hp("7.5%"),
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "#fcf4eb"
    },
    box: {
      width: 100,
      height: 100,
      backgroundColor: "#333",
      marginBottom: 10
    },
    vBottomSheet: {
      height: hp("7.5%"),
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "#8BC34A"
    },
    vPicker: {
      backgroundColor: "#fcf4eb",
      width: wp("100%"),
      height: hp("50%")
    }
  });
  
  var customStyles2 = StyleSheet.create({
    track: {
      height: 4,
      borderRadius: 2,
    },
    thumb: {
      width: 40,
      height: 40,
      borderRadius: 30 / 2,
      backgroundColor: 'white',
      borderColor: '#F44336',
      borderWidth: 2,
    }
  });