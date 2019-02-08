import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHightLight,
  Image,
  ListView,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  DrawerItems,
  DrawerNavigator,
  StackNavigator
} from "react-navigation";
import { ListItem, Header, Icon, Button } from "react-native-elements";
import BottomNavigation, {
  FullTab
} from "react-native-material-bottom-navigation";
import { ScrollView } from "react-native-gesture-handler";
//import AtoZListView from "react-native-atoz-listview";

var api_ForSearch = "https://w2m.home.co.th/WSM/api/MapNewHomeAPI/";
const rowHeight = 40;
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });


    

export default class DetailListview extends Component {
  static navigationOptions = {
    drawerLabel: () => null
  };
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      dataSource1: ds.cloneWithRows([]),

      ////Bottom
      activeTab: "newHome",

      ////Data
      // Token : this.props.navigation.state.params.Token,
      // latitudeUser : this.props.navigation.state.params.latitudeUser,
      // longitudeUser : this.props.navigation.state.params.longitudeUser,
      // Slider : this.props.navigation.state.params.SliderValue,
      // single_home_Picker : this.props.navigation.state.params.single_home_Picker,
      // Twin_Home_Picker : this.props.navigation.state.params.Twin_Home_Picker,
      // TownHouse_Picker : this.props.navigation.state.params.TownHouse_Picker,
      // Condo_Picker : this.props.navigation.state.params.Condo_Picker,
      // Panid_Picker : this.props.navigation.state.params.Panid_Picker,
      // TownHome_Picker : this.props.navigation.state.params.TownHome_Picker,
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


  test = async () =>{
    const Token = this.props.navigation.state.params.Token;
    const latitudeUser = this.props.navigation.state.params.latitudeUser;
    const longitudeUser = this.props.navigation.state.params.longitudeUser;
    const Slider = this.props.navigation.state.params.SliderValue;
    const single_home_Picker = this.props.navigation.state.params.single_home_Picker;
    const Twin_Home_Picker = this.props.navigation.state.params.Twin_Home_Picker;
    const TownHouse_Picker = this.props.navigation.state.params.TownHouse_Picker;
    const Condo_Picker = this.props.navigation.state.params.Condo_Picker;
    const Panid_Picker = this.props.navigation.state.params.Panid_Picker;
    const TownHome_Picker = this.props.navigation.state.params.TownHome_Picker;
   
    console.log("ข้อมูล รับ = " + this.state.dataSource1);
    console.log("Token รับ = " + Token);
    console.log("Slider รับ = " + Slider);
    console.log("บ้านเดี่ยว รับ  = " + single_home_Picker);
    console.log("รับบ้านแฝด = "+Twin_Home_Picker)
    console.log("รับทาวเฮ้า = "+TownHouse_Picker)
    console.log("รับคอน = "+Condo_Picker)
    console.log("รับพาณิช = "+Panid_Picker)
    console.log("รับทาวโฮม = "+TownHome_Picker)

    fetch(api_ForSearch, {
      method: "POST",
      headers: {
        Authorization: Token,
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },

      body:
        "MT_ID=43&S_ID=6&sortID=1&latitude=" +
        latitudeUser +
        "&longtitude=" +
       longitudeUser +
        "&radius=" +
        Slider +
        "&homeType=" +
        single_home_Picker +
        "|" +
        Twin_Home_Picker +
        "|" +
        TownHouse_Picker +
        "|" +
        Condo_Picker +
        "|" +
       Panid_Picker +
        "|" +
       TownHome_Picker /*+
        "|" +
        townHome +
        "|" +
        homeOffice*/
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            ///toload json
            dataSource:responseJson + console.log("datasource = " + responseJson),
            // arrayrow: responseJson[0].PRICE,
            dataSource1: ds.cloneWithRows(responseJson)
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });

  }
  componentDidMount(){
   // this.test();
  }
  ///bottomnav
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
  //////bottomnav
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

  handleTabPress = (newTab, oldTab) => {
    this.setState({ activeTab: newTab.key });
    console.log("newTab =" + newTab.key);
    // this.props.navigation.navigate("HomePage");
    console.log("OldTab =" + oldTab.key);

    if (newTab.key == "newHome") {
      console.log("Click to back 1 is call")
      this.props.navigation.navigate("Home");
     //this.props.navigation.goBack("Home")
     this.setState({
       single_home_Picker:''
     })
     /* this.setState({
        activeTab: "newHome"
      });*/

      
      
    } else if (newTab.key == "1stHome") {
      this.props.navigation.pop("HomePage");
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
          <Button  onPress={this.test.bind(this)} title = "wfwfe" style={{marginTop: 100 }}></Button>
          <ListView
            style={{ alignSelf: "stretch" }}
            dataSource={this.state.dataSource1}
            renderRow={rowData => (
              <TouchableOpacity
                style={styleslistView.navBarLeftButton}
                activeOpacity={0.4}
                //onPress={this.clickedItemText.bind(this, rowData)}
              >
                <Image
                  style={{ width: 160, height: 100 }}
                  source={{ uri: rowData.PRJ_PIC_S }}
                />
                <Text style={styleslistView.textHead}>
                  {rowData.PROJECT_NAME.toUpperCase()}
                </Text>
                <Text style={styleslistView.text}>
                  {" "}
                  ประเภท ={rowData.PRJ_TYPE}
                </Text>
                <Text> ราคา ={rowData.PRICE}</Text>
                <Text>
                  {" "}
                  Lat = {rowData.MARK_LAT_C} Lang = {rowData.MARK_LON_C}
                </Text>
              </TouchableOpacity>
            )}
            renderSeparator={() => <View style={styleslistView.separator} />}
            enableEmptySections={true}
          />
          
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

const styleslistView = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  BigBlue: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontSize: 30,
    color: "blue",
    fontWeight: "bold",
    marginTop: 40
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
    color: "red"
  },
  containerLoading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15
  },

  item: {
    padding: 15,
    alignItems: "center"
  },

  text: {
    fontSize: 18
  },

  separator: {
    height: 2,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  textHead: {
    fontWeight: "bold",
    fontSize: 20
  },
  containerViewButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    flex: 1
  },
  navBarLeftButton: {
    //paddingLeft: 8,
    width: wp("100%"),
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

{
  /* <Text> textInComponent </Text>
        <Text> Token = {this.props.navigation.state.params.Token}</Text>
        <Text>Latitude: {this.props.navigation.state.params.latitudeUser}</Text>
        <Text>Longitude: {this.props.navigation.state.params.longitudeUser}</Text>
        <Text>Slider : {this.props.navigation.state.params.SliderValue}</Text>
        <Text>บ้านเดี่ยว : {this.props.navigation.state.params.single_home_Picker}</Text>
        <Text>บ้านเดี่ยว : {this.props.navigation.state.params.Twin_Home_Picker}</Text>
        <Text>บ้านเดี่ยว : {this.props.navigation.state.params.TownHouse_Picker}</Text>
        <Text>บ้านเดี่ยว : {this.props.navigation.state.params.Condo_Picker}</Text>
        <Text>บ้านเดี่ยว : {this.props.navigation.state.params.Panid_Picker}</Text>
        <Text>บ้านเดี่ยว : {this.props.navigation.state.params.TownHome_Picker}</Text> */
}
