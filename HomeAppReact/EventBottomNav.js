import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image
} from "react-native";

import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  DrawerItems
} from "react-navigation";

import { Icon } from "react-native-elements";

///bottom
//import BottomNavigation from "react-native-material-bottom-navigation";
import BottomNavigation, {
  FullTab
} from "react-native-material-bottom-navigation";
//import rentHomeBottomNav from "./rentHomeBottomNav";

export default class EventBottomNav extends Component {
    static navigationOptions = {
        drawerLabel: "อีเว้นท์",
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require("./assert/house.png")}
            style={[styles.icon, { tintColor: tintColor }]}
          />
        )
      };
  constructor(props) {
    super(props);
    this.state = {
        activeTab: "event"
    };
  }

  tabs = [
    {
      key: "newHome",
      icon: "magnify",
      label: "บ้านใหม่",
      barColor: "#388E3C",
      pressColor: "rgba(255, 255, 255, 0.16)"
    },
    {
      key: "1stHome",
      icon: "home-heart",
      label: "บ้านชั้นนำ",
      barColor: "#0066CC",
      pressColor: "rgba(255, 255, 255, 0.16)"
    },
    {
      key: "2enHome",
      icon: "home-minus",
      label: "บ้านมือสอง",
      barColor: "#CC33CC",
      pressColor: "rgba(255, 255, 255, 0.16)"
    },
    {
      key: "news",
      icon: "newspaper",
      label: "ข่าว",
      barColor: "#006699",
      pressColor: "rgba(255, 255, 255, 0.16)"
    },
    {
      key: "event",
      icon: "calendar-clock",
      label: "อีเว้น",
      barColor: "#996600",
      pressColor: "rgba(255, 255, 255, 0.16)"
    }
  ];

  handleTabPress = (newTab, oldTab) => {
    this.setState({ activeTab: newTab.key });
     console.log("newTab =" + newTab.key);
    // this.props.navigation.navigate("HomePage");
    console.log("OldTab =" + oldTab.key);
    
     if (newTab.key == "newHome") {
       this.props.navigation.navigate("Home")
       this.setState({ activeTab: "event" });
     }else if(newTab.key == "1stHome"){
       this.props.navigation.navigate("HomePage")
       this.setState({ activeTab: "event" });
     }else if(newTab.key == "2enHome"){
       this.props.navigation.navigate("SecondHouseBottomNav");
       this.setState({ activeTab: "event" });
     }else if(newTab.key == "news"){
       this.props.navigation.navigate("NewsBottomNav");
       this.setState({ activeTab: "event" });
     }else if(newTab.key == "event"){
        this.props.navigation.navigate("EventBottomNav");
        this.setState({ activeTab: "event" });
      }
 
   };

  render() {
    return (
        <View style={styles.MainContainer}>
        {/* Your screen contents depending on current tab. */}

        <Text>Home Screen</Text>
        <Button title="Go to Home" onPress={this._handleOpenDrawer} />
        <Button
          title="Go to Event naja"
          onPress={() => this.props.navigation.navigate("HomePage")}
        />

        <Text> Click tab = {this.state.activeTab}</Text>

        <View style={styles.bottomViewNav}>
          <BottomNavigation
          
            activeTab={this.state.activeTab}
            onTabPress={this.handleTabPress}
            renderTab={this.renderTab}
            tabs={this.tabs}
          />
        </View>
      </View>
    );
  }

  renderTab = ({ tab, isActive }) => {
    return (
      <FullTab
        key={tab.key}
        isActive={isActive}
        label={tab.label}
        //renderIcon={this.renderIcon}
        renderIcon={this.renderIcon(tab.icon)}
      />
    );
  };

  renderIcon = iconName => ({ isActive }) => {
    return (
      <Icon
        size={30}
        type="material-community"
        color="#000000"
        name={iconName}
      />
    );
  };
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
    },
    MainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F4EFAF',
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },
    bottomViewNav:{
   
      width: '100%', 
        height: 50, 
        justifyContent: 'center', 
       // alignItems: 'center',
        position: 'absolute',
       // backgroundColor: '#F4E',
        bottom: 0,
        
    },
  });