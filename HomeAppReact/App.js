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
  //Button,
  Alert,
  Image,
  TouchableHightLight,
  Picker
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

import { Appbar } from "react-native-paper";
//import { Header } from "react-native-elements/src/header/Header";

import { Header, Button } from "react-native-elements";
import { Dimensions } from "react-native";

///responsive
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

//import AtoZListView from 'react-native-atoz-listview';
import Search from "react-native-search-box";

import ReactNativeItemSelect from "react-native-item-select";

import selectCard from "./testPicker/Home";

const { width, height } = Dimensions.get("window");

_goBack = () => console.log("Went back");

_onSearch = () => console.log("Searching");

_onMore = () => console.log("Shown more");

const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;
var redcolor = "#fff";
const textStyle = { textAlign: "center", color: "#696969", fontWeight: "bold" };
const dataforPicker = [
  { picPicker: "அ", description: "บ้านเดี่ยว", name: "Tamil" },
  { picPicker: "B", description: "บ้านแฝด", name: "English" },
  { picPicker: "B", description: "ทาวน์เฮ้าส์", name: "English" },
  { picPicker: "B", description: "คอนโดมิเนียม", name: "English" },
  { picPicker: "B", description: "อาคารพาณิชย์", name: "English" },
  { picPicker: "B", description: "ทาวน์โฮม", name: "English" }
];

let pic = {
  uri: "https://www.home.co.th/images/logo-share.png"
};
///Header Drawer
const DrawerContent = props => (
  <View>
    <View
      style={{
        backgroundColor: "#F44336",
        height: 160,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {/* <Text style={{ color: "white", fontSize: 30 }}>Header</Text> */}
      <Image
        source={require("./assert/logo_home.png")}
        style={{ width: 160, height: 100 }}
      />
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
      activeTab: "newHome",
      colorIcon: "#fff",
      search: "",
     
      
      single_home_Picker: [],
      Twin_Home_Picker: '',
      TownHouse_Picker: '',
      Condo_Picker:'',
      Panid_Picker:'',
      TownHome_Picker:'',

      dataPicker: [
        { picIcon: "A", description: "บ้านเดี่ยว", name: "Tamil" },
        { picIcon: "B", description: "บ้านแฝด", name: "English" },
        { picIcon: "C", description: "ทาวน์เฮ้าส์", name: "Tamil" },
        { picIcon: "D", description: "คอนโดมิเนียม", name: "Tamil" },
        { picIcon: "E", description: "อาคารพาณิชย์", name: "Tamil" },
        { picIcon: "F", description: "ทาวน์โฮม", name: "Tamil" }
      ],
        
      data: {
        A: [
          {
            name: "Anh Tuan Nguyen",
            age: 28
          },
          {
            name: "An Nhien",
            age: 2
          }
        ],
        Z: [
          {
            name: "Thanh Tu Pham",
            age: 32
          },
          {
            name: "Tien Thanh",
            age: 24
          }
        ]
      }
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
      label: "อีเว้นท์",
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
      this.props.navigation.navigate("Home");
      this.setState({
        activeTab: "newHome"
      });
    } else if (newTab.key == "1stHome") {
      this.props.navigation.navigate("HomePage");
      this.setState({
        activeTab: "newHome"
      });
    } else if (newTab.key == "2enHome") {
      this.props.navigation.navigate("SecondHouseBottomNav");
      this.setState({ activeTab: "newHome" });
    } else if (newTab.key == "news") {
      this.props.navigation.navigate("NewsBottomNav");
      this.setState({ activeTab: "newHome" });
    } else if (newTab.key == "event") {
      this.props.navigation.navigate("EventBottomNav");
      this.setState({ activeTab: "newHome" });
    }
  };

  updateSearch = search => {
    this.setState({ search });
  };

  _handleOpenDrawer() {
    this.props.navigation.openDrawer();
  }

  ///Search

  renderRow = (item, sectionId, index) => {
    return (
      <TouchableHightLight
        style={{
          height: rowHeight,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>{item.name}</Text>
      </TouchableHightLight>
    );
  };

  beforeFocus = () => {
    return new Promise((resolve, reject) => {
      console.log("beforeFocus");
      resolve();
    });
  };

  onFocus = text => {
    return new Promise((resolve, reject) => {
      console.log("onFocus", text);
      resolve();
    });
  };

  // Important: You must return a Promise
  afterFocus = () => {
    return new Promise((resolve, reject) => {
      console.log("afterFocus");
      resolve();
    });
  };

  ////end Search

  
  render() {
    const { search } = this.state;
    return (
      // <View style={styles.MainContainer}>
      //   <Header
      //     placement="left"
      //     leftComponent={{ icon: "menu", color: "#fff" }}
      //     centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
      //     rightComponent={{ icon: "home", color: "#fff" }}
      //   />

      //   {/* Your screen contents depending on current tab. */}

      //  <Button title="Go to Home" onPress={this._handleOpenDrawer} />
      //   <Button
      //     title="Go to HomePage"
      //     onPress={() => this.props.navigation.navigate("HomePage")}
      //   />

      //   <Text> Click tab = {this.state.activeTab}</Text>

      //   <View style={styles.bottomViewNav}>
      //     <BottomNavigation
      //       activeTab={this.state.activeTab}
      //       onTabPress={this.handleTabPress}
      //       renderTab={this.renderTab}
      //       tabs={this.tabs}
      //     />
      //   </View>
      // </View>

      <View style={styles.containerLayout}>
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
          centerComponent={{ text: "บ้านใหม่", style: { color: "#fff" } }}
          containerStyle={{
            backgroundColor: "#0066CC",
            justifyContent: "space-around"
          }}
        />

        <View style={[styles.box2]}>
          <View style={styles.searchbarnaja}>
            <Search
              ref="search_box"
              backgroundColor="#F44336"
              placeholderTextColor="#000000"
            />
            <View style={styles.Picker}>
              <ReactNativeItemSelect
                data={this.state.dataPicker}
                itemComponent={item => (
              <View>
                <Text style={{ ...textStyle, fontSize: 35 }}>{item.picIcon}</Text>
                <Text style={textStyle}>{item.description}</Text>
              </View>
                )}
                onSubmit={item => this.handelgetData(item)}
                multiselect = {true}
                />
            
             
            </View>
          </View>
        </View>

        <View style={[styles.BottomNavBar]}>
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
  handelgetData(item){
    console.log(item)
    console.log(item.description)
    const data = JSON.stringify(item)
    
    

    /*item.map((function(news , i){
      key ={i},
    console.log(news.description),
    console.log(i)

    if(news.description == 'บ้านเดี่ยว'){
      this.setState({itemInpick : new.description})
    }else if (news.description == 'บ้านแฝด'){
      
    }
    }))*/
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
      screen: HomeScreen
    },
    HomePage: {
      screen: HomePage
    },

    SecondHouseBottomNav: {
      screen: SecondHouseBottomNav
    },
    NewsBottomNav: {
      screen: NewsBottomNav
    },
    EventBottomNav: {
      screen: EventBottomNav
    }
  },
  {
    contentComponent: DrawerContent
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
    flexDirection: "column",
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
    left: 0,
    bottom: 0,
    right: 0
  },
  bottom: {
    flexDirection: "column",
    flex: 1
  },
  icon: {
    width: 24,
    height: 24
  },
  MainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: '#F4EFAF',
    paddingTop: Platform.OS === "ios" ? 20 : 0
  },
  bottomViewNav: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    // alignItems: 'center',
    position: "absolute",
    // backgroundColor: '#F4E',
    bottom: 0
  },
  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    marginBottom: 610
  },
  containerLayout: {
    //width: screenWidth ,
    //height: screenHeight ,
    // flex: 1,
    // width:"100%",

    // backgroundColor:'#4286f4',
    flex: 0,
    flexGrow: 1,
    flexDirection: "column",
    width: null,
    height: null
  },
  box1: {
    flex: 1
    // backgroundColor: "#2196F3"
  },
  box2: {
    flex: 10,
    backgroundColor: "#FFF"
    //flex: 0,
    // flexGrow: 15,
  },
  box3: {
    flex: 1
    //backgroundColor: "#e3aa1a"
    //flex: 0,
    // flexGrow: 1,
  },
  searchbarnaja: {
    height: hp("6%"),
    width: wp("100%")
    //backgroundColor: "red"
  },
  Picker: {
    height: hp("60%"),
    width: wp("100%"),
    backgroundColor: "#e3aa1a"
  }
});
