'use strict';
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
  ActivityIndicator,
  Alert,

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
import HomePage from "../HomePage";
//import AtoZListView from "react-native-atoz-listview";


var api_ForSearch = "https://w2m.home.co.th/WSM/api/MapNewHomeAPI/";
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });


export default class DetailListview extends Component {
  static navigationOptions = {
    drawerLabel: () => null
  };

  constructor(props) {
    console.log("constructor  Call")
    super(props);
    
    
    this.state = {
      
      
      arraydataSource1: [],
      dataSource : [],
      dataSource1: ds.cloneWithRows([]),
      ////Bottom
      activeTab: "newHome",
      Token: this.props.navigation.state.params.Token,
      latitudeUser: this.props.navigation.state.params.latitudeUser,
      longitudeUser: this.props.navigation.state.params.longitudeUser,
      SliderValue: this.props.navigation.state.params.SliderValue,
      single_home: this.props.navigation.state.params.single_home_Picker,
      Twin_Home: this.props.navigation.state.params.Twin_Home_Picker,
      Town_House: this.props.navigation.state.params.TownHouse_Picker,
      Condo: this.props.navigation.state.params.Condo_Picker,
      Panid: this.props.navigation.state.params.Panid_Picker,
      TownHome: this.props.navigation.state.params.TownHome_Picker
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

  FetchData() {
    const Token = this.props.navigation.state.params.Token;
    const latitudeUser = this.props.navigation.state.params.latitudeUser;
    const longitudeUser = this.props.navigation.state.params.longitudeUser;
    const SliderValue = this.props.navigation.state.params.SliderValue;
    const singleHouse = this.props.navigation.state.params.single_home_Picker;
    const Twin_Home = this.props.navigation.state.params.Twin_Home_Picker;
    const TownHouse = this.props.navigation.state.params.TownHouse_Picker;
    const Condo = this.props.navigation.state.params.Condo_Picker;
    const Panid = this.props.navigation.state.params.Panid_Picker;
    const TownHome = this.props.navigation.state.params.TownHome_Picker;
    

    //console.log(range)
    fetch("https://w2m.home.co.th/WSM/api/MapNewHomeAPI/", {
      method: "POST",
      headers: {
        //{this.props.navigation.state.params.Token}
        Authorization: Token,
        //Authorization: bearer + " " + token,
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },

      // body:
      // "MT_ID=43&S_ID=6&sortID=1&latitude=13.8333649&longtitude=100.570419&radius=5&homeType="+singleHouse+"|"+twinHouse+"|"+townHouse+"|"+Condo+"|"+panid+"|"+blank+"|"+townHome

      body:
        "MT_ID=43&S_ID=6&sortID=1&latitude=" +
        latitudeUser +
        "&longtitude=" +
        longitudeUser +
        "&radius=" +
        SliderValue +
        "&homeType=" +
        singleHouse +
        "|" +
        Twin_Home +
        "|" +
        TownHouse +
        "|" +
        Condo +
        "|" +
        Panid +
        "|" +
        TownHome
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson == "" || responseJson == null) {
          Alert.alert("Location Not Found!");
         // this.props.navigation.navigate("FindLocation");
        }

        this.setState(
          {
            ///toload json
            dataSource: responseJson,
            // arrayrow: responseJson[0].PRICE,
           dataSource1: ds.cloneWithRows(responseJson),
           
          arraydataSource1 : responseJson
          },
          function() {}
        );
      })

      .catch(error => {
        console.error(error);
      });
  }


  componentWillMount(){
    console.log("componentWill Call")
  }

  componentDidMount() {
    console.log("ComponentDid Call")
    console.log("Status datasource1 In Did : "+ this.state.dataSource1)
   
    this.FetchData();

    
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
    console.log("newTab in ListView =" + newTab.key);
    // this.props.navigation.navigate("HomePage");
    console.log("OldTab =" + oldTab.key);

    if (newTab.key == "newHome") {
      console.log("Click to back 1 is call");
      this.props.navigation.navigate("Home");
      this.allClear();
      
    } else if (newTab.key == "1stHome") {
      this.props.navigation.navigate("HomePage");
      this.setState({ activeTab: "newHome" });
      this.allClear();
    } else if (newTab.key == "2enHome") {
      this.props.navigation.navigate("SecondHouseBottomNav");
      this.setState({ activeTab: "newHome" });
      this.allClear();
    } else if (newTab.key == "news") {
      this.props.navigation.navigate("NewsBottomNav");
      this.setState({ activeTab: "newHome" });
      this.allClear();
    } else if (newTab.key == "event") {
      this.props.navigation.navigate("EventBottomNav");
      this.setState({ activeTab: "newHome" });
      this.allClear();
    }
  };

  allClear() {
    if (this.props.navigation.state.params.single_home_Picker != null) {
      this.props.navigation.state.params.single_home_Picker = "";
    }
    if (this.props.navigation.state.params.Twin_Home_Picker != null) {
      this.props.navigation.state.params.Twin_Home_Picker = "";
    }
    if (this.props.navigation.state.params.TownHouse_Picker != null) {
      this.props.navigation.state.params.TownHouse_Picker = "";
    }
    if (this.props.navigation.state.params.Condo_Picker != null) {
      this.props.navigation.state.params.Condo_Picker = "";
    }
    if (this.props.navigation.state.params.Panid_Picker != null) {
      this.props.navigation.state.params.Panid_Picker = "";
    }
    if (this.props.navigation.state.params.TownHome_Picker != null) {
      this.props.navigation.state.params.TownHome_Picker = "";
    }/*if(this.state.arraydataSource1 != []){
      console.log("eieie call")
      this.state.arraydataSource1 = ds.cloneWithRows([])
    }if (this.state.dataSource != []) {
      this.state.dataSource = ds.cloneWithRows([])
      
    }if (this.state.dataSource1 != []) {
      this.state.dataSource1 = ds.cloneWithRows([]);
    }*/
    /* this.setState({
      single_home:"",
      Twin_Home:"",
      Town_House:"",
      Condo:"",
      Panid:"",
      TownHome:"",
   
    })*/
  }

  sentDataToMap(){
    this.props.navigation.navigate("Map")
  }

  clickedItemText(clickedItem) {
   // this.props.navigation.navigate("Item", { item: clickedItem });
    //Alert.alert(clickedItem);
    console.log("Click Item = "+clickedItem.PROJECT_NAME)
  }

  render() {
    console.log("Render Call")
    console.log("datasource1 = " +this.state.dataSource1)
    console.log("arraydatasource = " +this.state.arraydataSource1)

    

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
          <ListView
            style={{ alignSelf: "stretch" , height :hp("100%") ,marginTop: hp("15%") }}
           dataSource={this.state.dataSource1}
           // dataSource ={this.state.dataSource.cloneWithRows(this.state.arraydataSource1)}
            renderRow={rowData => (
              <TouchableOpacity
                style={styleslistView.navBarLeftButton}
                activeOpacity={0.4}
                onPress={this.clickedItemText.bind(this, rowData)}
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
          {/* <Text> Token = {this.props.navigation.state.params.Token}</Text>
        <Text>Latitude: {this.props.navigation.state.params.latitudeUser}</Text>
        <Text>Longitude: {this.props.navigation.state.params.longitudeUser}</Text>
        <Text>Slider : {this.props.navigation.state.params.SliderValue}</Text>
        <Text>บ้านเดี่ยว : {this.props.navigation.state.params.single_home_Picker}</Text>
        <Text>บ้านเดี่ยว : {this.props.navigation.state.params.Twin_Home_Picker}</Text>
        <Text>บ้านเดี่ยว : {this.props.navigation.state.params.TownHouse_Picker}</Text>
        <Text>บ้านเดี่ยว : {this.props.navigation.state.params.Condo_Picker}</Text>
        <Text>บ้านเดี่ยว : {this.props.navigation.state.params.Panid_Picker}</Text>
        <Text>บ้านเดี่ยว : {this.props.navigation.state.params.TownHome_Picker}</Text> 
        <Text>-------------------------------------------------------------</Text> */}
        
        {/* view botton */}
          <View style ={styles.button_bot}>
            {/* <Button onPress ={this.FetchData.bind(this)}></Button> */}
            <Button type ='outline' title='ค้นหา' onPress ={this.FetchData.bind(this)}></Button>
            <Button type ='outline' title='Map' onPress ={this.sentDataToMap.bind(this)}></Button>
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
  },
  button_bot:{
    marginBottom: hp("7.5%"),
    //backgroundColor: 'green',
    height : hp("7%"),
    width : wp("50%"),
    marginLeft: wp("25%"),
    //alignItems : 'center'
   // position: 'absolute',
    //bottom : hp("7.5%")

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
   // fontSize: 30,
    color: "blue",
    fontWeight: "bold",
    marginTop: 40
  },
  instructions: {
    textAlign: "center",
    //color: "#333333",
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
        <Text>บ้านเดี่ยว : {this.props.navigation.state.params.TownHome_Picker}</Text> 
        <Text>-------------------------------------------------------------</Text>
        <Text>state : {this.state.single_home}</Text>
        <Text>state Twin_Home : {this.state.Twin_Home}</Text>
        <Text>state Town_House : {this.state.Town_House}</Text>
        <Text>state condo : {this.state.Condo}</Text>
        <Text>state  Panid: {this.state.Panid}</Text>
        <Text>state Town Home : {this.state.TownHome}</Text> */
}
