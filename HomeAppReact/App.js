/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

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
import NewsBottomNav from "./NewsBottomNav";
import NewsBotomNav from "./NewsBottomNav";
import EventBottomNav from "./EventBottomNav";
import Logotitle from "./Logotitle";

import { Appbar } from 'react-native-paper';

_goBack = () => console.log('Went back');

  _onSearch = () => console.log('Searching');

  _onMore = () => console.log('Shown more');

const DrawerContent = props => (
  
  
  <View>
    <View
      style={{
        backgroundColor: "#f50057",
        height: 140,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text style={{ color: "white", fontSize: 30 }}>Header</Text>
    </View>
    <DrawerItems {...props} />
  </View>
);



///Drawer
class HomeScreen extends React.Component {

 
  static navigationOptions = {
    
  
    drawerLabel: "ค้นหาบ้านใหม่",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("./assert/house.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  

  constructor(props) {
    super(props);

    this._handleOpenDrawer = this._handleOpenDrawer.bind(this);
    this.state = {
      activeTab: "newHome"
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
      label: "อีเว้นท์",
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
      this.setState({ activeTab: "newHome" });
    }else if(newTab.key == "1stHome"){
      this.props.navigation.navigate("HomePage")
      this.setState({ activeTab: "newHome" });
    }else if(newTab.key == "2enHome"){
      this.props.navigation.navigate("SecondHouseBottomNav");
      this.setState({ activeTab: "newHome" });
    }else if(newTab.key == "news"){
      this.props.navigation.navigate("NewsBottomNav");
      this.setState({ activeTab: "newHome" });
    }else if(newTab.key == "event"){
      this.props.navigation.navigate("EventBottomNav");
      this.setState({ activeTab: "newHome" });
    }

  };

  _handleOpenDrawer() {
    this.props.navigation.openDrawer();
  }
  render() {
    return (

  
      
      <View style={styles.MainContainer}>

       
      
        {/* Your screen contents depending on current tab. */}

        
        <Button title="Go to Home" onPress={this._handleOpenDrawer} />
        <Button
          title="Go to HomePage"
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

/*const AppNavigator = createStackNavigator(
  {
    // Home: HomeScreen,
    //Details: DetailsScreen,

    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    },
    HomePage: {
      screen: HomePage
    },
    rentHomeBottomNav:{
      screen: rentHomeBottomNav
    },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);*/

//const AppContainer = createAppContainer(AppNavigator);

//////////////////
class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("./assert/house.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate("Notifications")}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: "Notifications",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("./assert/house.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      
    },
    HomePage: {
      screen: HomePage
    },
   
    SecondHouseBottomNav: {
      screen: SecondHouseBottomNav
    },
    NewsBottomNav:{
      screen: NewsBottomNav
    },
    EventBottomNav:{
      screen:EventBottomNav
    },
    
  },
  {
    contentComponent: DrawerContent,
    
  }
);
const MyApp = createAppContainer(MyDrawerNavigator);
////////////

export default class App extends React.Component {
  render() {
    return <MyApp />;
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
  },
  MainContainer:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
     // backgroundColor: '#F4EFAF',
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
      
  },  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    marginBottom: 610
  },
});
