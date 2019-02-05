import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
} from "react-native";

import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  DrawerItems,
  DrawerNavigator,
  StackNavigator
} from "react-navigation";
import HomePage from "./HomePage";
import { Icon } from "react-native-elements";

///bottom
//import BottomNavigation from "react-native-material-bottom-navigation";
import BottomNavigation, {
  FullTab
} from "react-native-material-bottom-navigation";
import rentHomeBottomNav from "./rentHomeBottomNav";
import SecondHouseBottomNav from "./SecondHouseBottomNav";
import { Header } from "react-native-elements";
import { Dimensions } from "react-native"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";


const { width, height } = Dimensions.get("window")
const screenWidth = width < height ? width : height
const screenHeight = width < height ? height : width

export default class NewsBotomNav extends Component {

    static navigationOptions = {
        drawerLabel: "ข่าว",
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
    
        activeTab: "news",
        colorIcon: "#fff"
    
    };
  }

  tabs = [
    {
      key: "newHome",
      icon: "magnify",
      label: "บ้านใหม่",
      barColor: "#0066CC",
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
      barColor: "#0066CC",
      pressColor: "rgba(255, 255, 255, 0.16)"
    },
    {
      key: "news",
      icon: "newspaper",
      label: "ข่าว",
      barColor: "#0066CC",
      pressColor: "rgba(255, 255, 255, 0.16)"
    },
    {
      key: "event",
      icon: "calendar-clock",
      label: "อีเว้น",
      barColor: "#0066CC",
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
       this.setState({ activeTab: "news" });
     }else if(newTab.key == "1stHome"){
       this.props.navigation.navigate("HomePage")
       this.setState({ activeTab: "news" });
     }else if(newTab.key == "2enHome"){
       this.props.navigation.navigate("SecondHouseBottomNav");
       this.setState({ activeTab: "news" });
     }else if(newTab.key == "news"){
       this.props.navigation.navigate("NewsBottomNav");
       this.setState({ activeTab: "news" });
     }else if(newTab.key == "event"){
        this.props.navigation.navigate("EventBottomNav");
        this.setState({ activeTab: "news" });
      }
 
   };

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.header]}>
          <Header
            statusBarProps={{ barStyle: "light-content" }}
            barStyle="light-content" // or directly
            leftComponent={{
              icon: "menu",
              color: "#fff",
              onPress: () => {
                this.props.navigation.openDrawer();
              }
            }}
            centerComponent={{
              text: "ข่าว",
              style: { color: "#fff", fontSize: 25, fontWeight: "bold" }
            }}
            containerStyle={{
              backgroundColor: "#0066CC",
              justifyContent: "space-around",
              height: hp("15%")
            }}
          />
        </View>
        {/* Main */}
        <View style={[styles.content]}>
          
        </View>
        {/* Foot */}
        <View style={[styles.footer]}>
          <BottomNavigation
             style={styles.vBottomSheet}
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
        color={this.state.colorIcon}
        name={iconName}
      />
    );
  };
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#010000"
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
  backgroundColor: "#8BC34A"
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
  backgroundColor: "green",
  width: wp("100%"),
  height: hp("50%")
  }
  });

  