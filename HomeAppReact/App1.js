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
import { Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Header, Button } from "react-native-elements";
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
import BottomNavigation, {
  FullTab
} from "react-native-material-bottom-navigation";
import rentHomeBottomNav from "./rentHomeBottomNav";
import SecondHouseBottomNav from "./SecondHouseBottomNav";
import NewsBottomNav from "./NewsBottomNav";
import NewsBotomNav from "./NewsBottomNav";
import EventBottomNav from "./EventBottomNav";
import Logotitle from "./Logotitle";
import Slider from "react-native-slider";
import Search from "react-native-search-box";
import ReactNativeItemSelect from "react-native-item-select";

var { height } = Dimensions.get("window");

var box_count = 3;
var box_height = height / box_count;
const textStyle = { textAlign: "center", color: "#696969", fontWeight: "bold" };

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
      Twin_Home_Picker: "",
      TownHouse_Picker: "",
      Condo_Picker: "",
      Panid_Picker: "",
      TownHome_Picker: "",
      value: 5,

      dataPicker: [
        {
          iconName: "home-account",
          type: "material-community",
          description: "บ้านเดี่ยว",
          name: "Tamil"
        },
        {
          iconName: "home-plus",
          type: "material-community",
          description: "บ้านแฝด",
          name: "English"
        },
        {
          iconName: "domain",
          type: "material-community",
          description: "ทาวน์เฮ้าส์",
          name: "Tamil"
        },
        {
          iconName: "office-building",
          type: "material-community",
          description: "คอนโดมิเนียม",
          name: "Tamil"
        },
        {
          iconName: "office-building",
          type: "material-community",
          description: "อาคารพาณิชย์",
          name: "Tamil"
        },
        {
          iconName: "houzz",
          type: "material-community",
          description: "ทาวน์โฮม",
          name: "Tamil"
        }
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

  /*change(value) {
      this.setState(() => {
        return {
          value: parseFloat(value)
        };
      });
    }*/

  ////end Search

  render() {
    const { search } = this.state;
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
              text: "บ้านใหม่",
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
          {/* Search in Main */}
          <View style={styles.vSearch}>
            <Search
              ref="search_box"
              backgroundColor="#F44336"
              placeholderTextColor="#000000"
            />
          </View>

          {/* Picker in Main */}
          <View style={styles.vPicker}>
            <ReactNativeItemSelect
              data={this.state.dataPicker}
              itemComponent={(item, selected) => (
                <View>
                  {/* <Text style={{ ...textStyle, fontSize: 35 }}>
                      {item.picIcon}
                    </Text> */}
                  <Icon
                    name={item.iconName}
                    type={item.type}
                    color="#000000"
                    size={40}
                  />
                  <Text style={textStyle}>{item.description}</Text>
                </View>
              )}
              onSubmit={item => this.handelgetData(item)}
              multiselect={true}
              countPerRow={3}
              submitBtnTitle="ค้นหา"
              tickPosition="topLeft"
              styles={{
                btn: {
                  ...Platform.select({
                    android: {
                      backgroundColor: "#F44336",
                      marginTop: hp("15.5%"),
                      height: hp("6%"),
                      width: wp("30%"),
                      marginLeft: wp("10%")
                    },
                    ios: {
                      backgroundColor: "#F44336",
                      marginTop: hp("19%"),
                      height: hp("6%"),
                      width: wp("30%"),
                      marginLeft: wp("10%")
                    }
                  })
                },
                disabledBtn: { backgroundColor: "#F44336" },
                tickTxt: { backgroundColor: "#F44336" },
                activeItemBoxHighlight: { borderColor: "#F44336" }
              }}
            />
          </View>
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
  handelgetData(item) {
    console.log(item);
    console.log(item.description);
    const data = JSON.stringify(item);

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
export default class App1 extends Component {
  render() {
    return <MyApp />;
  }
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
    height: hp("10%"),
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
    //position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
   // backgroundColor: "#8BC34A"
  },
  vPicker: {
    backgroundColor: "green",
    width: wp("100%"),
    height: hp("50%")
  }
});
