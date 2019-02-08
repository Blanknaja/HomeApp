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
//import SplashScreen from 'react-native-splash-screen'

import SplashScreen from 'react-native-splash-screen';
import DetailListview from "./ResultOfFindnewhome/DetailListview";

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

//api
var api_GetToken = "https://w2m.home.co.th/WSM/token";


class Splashscreen extends React.Component{
  static navigationOptions = {
    drawerLabel: () => null
}

  constructor(props){
    super(props);

  
    this.state = {

      jsonData: "",
      jsonGetTokenType: "",
      responseJson: [],
      dataArray: [],
      dataSource: [],
      arrayrow: [],



      //////Current Location
      latitude: null,
      longitude: null,
      error: null,


    }
  }
  
  componentDidMount() {

  
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
        

        console.log("Status lattitude = " +this.state.latitude)
        console.log("Status error = " +this.state.error)

        if ((this.state.latitude && this.state.longitude)  != null) {
            Alert.alert("Get Location Complete")

        }

        // Alert.alert(this.state.latitude.toString())
      },
      error => this.setState({ error: error.message }),
      {// enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 
        enableHighAccuracy: false, timeout: 5000, maximumAge: 10000 
      }
    );
///////////////Token///////////////////
   const data = {
      application: "x-www-form-urlencoded",
      grant_type: "password",
      username: "w2mapp",
      password: "W72xT1hv3ZQmHPkNZ5wM",
      client_id: "wsmhomei",
      client_secret: "2bbff14f586fdd94261cf90d679c0ce9"
    };
    console.log(data)

    fetch(api_GetToken, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      body:
        "grant_type=password&username=w2mapp&password=W72xT1hv3ZQmHPkNZ5wM&client_id=wsmhomei&client_secret=2bbff14f586fdd94261cf90d679c0ce9"
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          jsonData: responseJson.access_token,
          jsonGetTokenType: responseJson.token_type
        });
        // var a = responseJson;

        if ((responseJson != null) &&(this.state.latitude != null)) {
          //Alert.alert("get token Complete!");
         // SplashScreen.hide();
         // SplashScreen.hide(this, true);
         SplashScreen.hide();
          this.props.navigation.navigate("Home",{
            Token:this.state.jsonGetTokenType+" "+this.state.jsonData,
            latitudeUser:this.state.latitude,
            longitudeUser:this.state.longitude
          });

        } else {
          //Alert.alert("No Data!");
          this.props.navigation.navigate("SplashScreen")
        }
        console.log ("Token = "+this.state.jsonGetTokenType+" "+this.state.jsonData)
        
      })
      .catch(error => {
        console.error(error);
      });

      ///////////////End Token///////////

    
    
  }

  render(){
    return(
      <View style={{backgroundColor:'red'}}>
        
      </View>
    );
  }

}
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


    this.getLocation = this.getLocation.bind(this);
    this._handleOpenDrawer = this._handleOpenDrawer.bind(this);
    this.state = {
      activeTab: "newHome",
      colorIcon: "#fff",
      search: "",

      single_home_Picker: "บ้านเดี่ยว",
      Twin_Home_Picker: "บ้านแฝด",
      TownHouse_Picker: "ทาวน์เฮ้าส์",
      Condo_Picker: "คอนโดมิเนียม",
      Panid_Picker: "อาคารพาณิชย์",
      TownHome_Picker: "ทาวน์โฮม",
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

  getLocation() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
        

        if ((this.state.latitude && this.state.longitude)  != null) {
            Alert.alert("Get Location Complete")
        }

        // Alert.alert(this.state.latitude.toString())
      },
      error => this.setState({ error: error.message }),
      {// enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 
        enableHighAccuracy: false, timeout: 5000, maximumAge: 10000 
      }
    );
  }

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
             //onSubmit={item => this.getLocation()}
              multiselect={true}
              countPerRow={3}
              submitBtnTitle="ค้นหา"
              tickPosition="topLeft"
              styles={{
                btn: {
                  ...Platform.select({
                    android: {
                      backgroundColor: "#F44336",
                      height: hp("5%"),
                      width: wp("30%"),
                      marginLeft: wp("10%"),
                      marginTop: hp("14%")
                      //marginBottom:hp("-25%")
                    },
                    ios: {
                      backgroundColor: "#F44336",
                      height: hp("5%"),
                      width: wp("30%"),
                      marginLeft: wp("10%"),
                      marginTop: hp("15%")
                    }
                  })
                },
                disabledBtn: { backgroundColor: "#F44336" },
                tickTxt: { backgroundColor: "#F44336" },
                activeItemBoxHighlight: {
                  borderColor: "#F44336",
                  backgroundColor: "#84cee8"
                },
                itemComponentWrapper: { borderColor: "#F44336" }
                //btnOpacity:{backgroundColor:'#F44336',borderColor:'#F44336', width:wp("30%"),height:hp("10%"),title:'fewfw'}
              }}
            />
          </View>

          {/* Slider in Main */}
          <View
            style={{
              //backgroundColor: "red",
              height: hp("10%"),
              width: wp("100%"),
              position: "absolute",
              top: Platform.OS == "ios" ? hp("47%") : hp("49%")
            }}
          >
            <Slider
              value = {this.state.value}
              onValueChange={value => this.setState({ value })}
              trackStyle={customStyles2.track}
              thumbStyle={customStyles2.thumb}
              minimumTrackTintColor="#F44336"
              maximumValue = {10}
              step = {1}
            />
            <Text>
            ระยะทาง: {this.state.value} กิโลเมตร
            </Text>
        {/* <Text> Token = {this.props.navigation.state.params.Token}</Text> */}
        
        <Text>Latitude: {this.props.navigation.state.params.latitudeUser}</Text>
        <Text>Longitude: {this.props.navigation.state.params.longitudeUser}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
          </View>
          {/* Button in main */}
            <View style = {{position:'absolute',
                            width:wp("30%"),
                            height:hp("5%"),
                            bottom:hp("36%"),
                            marginLeft:wp("50%"),
                            backgroundColor:'red'}}>
            

            </View>
            
         {/* <Text>{this.state.single_home_Picker}</Text>
        <Text>{this.state.Twin_Home_Picker}</Text>
        <Text>{this.state.TownHome_Picker}</Text>
        <Text>{this.state.Condo_Picker}</Text>
        <Text>{this.state.Panid_Picker}</Text>
        <Text>{this.state.TownHome_Picker}</Text>  */}
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

  ////search
  handelgetData(item) {
    console.log(item);
    
    let data = item;
    console.log(data)

    data.forEach(element => {
        console.log("ELEMENT = "+element.description)

        if (element.description == "บ้านเดี่ยว") {

          console.log("CALL บ้านเดี่ยว")
          this.props.navigation.navigate("DetailListview", {
            single_home_Picker: this.state.single_home_Picker
           // +console.log("ส่งบ้านเดี่ยว = "+this.state.single_home_Picker)
          });
        }if(element.description == "บ้านแฝด"){
          console.log("CALL บ้านแฝด")
          this.props.navigation.navigate("DetailListview", {
            Twin_Home_Picker: this.state.Twin_Home_Picker
          //  +console.log("ส่งบ้านแฝด = "+this.state.Twin_Home_Picker)
          });
        }if(element.description == "ทาวน์เฮ้าส์"){
          console.log("CALL ทาวน์เฮ้าส์")
          this.props.navigation.navigate("DetailListview", {
            TownHouse_Picker: this.state.TownHouse_Picker
          });
        }if(element.description == "คอนโดมิเนียม"){
          console.log("CALL คอนโดมิเนียม")
          this.props.navigation.navigate("DetailListview", {
            Condo_Picker: this.state.Condo_Picker
          });
        }if(element.description == "อาคารพาณิชย์"){
          console.log("CALL อาคารพาณิชย์")
          this.props.navigation.navigate("DetailListview", {
            Panid_Picker: this.state.Panid_Picker
          });
        }if(element.description == "ทาวน์โฮม"){
          console.log("CALL ทาวน์โฮม")
          //this.setState({TownHome_Picker:'ทาวน์โฮม'})
          ///For fix Pass data
          //this.state = {TownHome_Picker : 'ทาวน์โฮม'}
          this.props.navigation.navigate("DetailListview", {
            TownHome_Picker: this.state.TownHome_Picker
          });
        }
        
    });
    console.log("Token from first Page = "+this.props.navigation.state.params.Token)
    console.log("Latitude from first Page =  "+ this.props.navigation.state.params.latitudeUser)
    console.log("Longtitude from first Page =  "+ this.props.navigation.state.params.longitude)
    console.log("Slider = "+this.state.value)
    //console.log("ส่งบ้านเดี่ยว = "+this.state.single_home_Picker)
    //console.log("ส่งบ้านแฝด = "+this.state.Twin_Home_Picker)
    //console.log("ส่งทาวเฮ้า = "+this.state.TownHouse_Picker)
    //console.log("ส่งคอน = "+this.state.Condo_Picker)
    //console.log("ส่งพาณิช = "+this.state.Panid_Picker)
    //console.log("ส่งทาวโฮม = "+this.state.TownHome_Picker)
    
     //this.props.navigation.navigate("DetailListview");
     this.props.navigation.navigate("DetailListview",{
      Token:this.props.navigation.state.params.Token,
      latitudeUser:this.props.navigation.state.params.latitudeUser,
      longitudeUser:this.props.navigation.state.params.longitudeUser,
      SliderValue:this.state.value,

      /*single_home_Picker:this.state.single_home_Picker,
      Twin_Home_Picker:this.state.Twin_Home_Picker,
      TownHouse_Picker:this.state.TownHome_Picker,
      Condo_Picker:this.state.Condo_Picker,
      Panid_Picker:this.state.Panid_Picker,
      TownHome_Picker:this.state.TownHome_Picker,*/
    });
   

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
}
const MyDrawerNavigator = createDrawerNavigator(
  {
    SplashScreen:{
      screen:Splashscreen
    
    },
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
    },
    DetailListview:{
      screen:DetailListview
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