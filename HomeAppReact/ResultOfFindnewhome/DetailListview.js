import React, { Component } from 'react';
import { View, Text,StyleSheet,FlatList ,TouchableHightLight} from 'react-native';
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

//import AtoZListView from "react-native-atoz-listview";


var api_ForSearch = "https://w2m.home.co.th/WSM/api/MapNewHomeAPI/";
const rowHeight = 40;

export default class DetailListview extends Component {
    
    static navigationOptions = {
        drawerLabel: () => null
    }
//   constructor(props) {
//     super(props);
//     this.state = {
//        
//     };
//   }


 

  render() {
    return (
      <View style={styles.container}>
      

         
        {/* <Text> textInComponent </Text>
        <Text> Token = {this.props.navigation.state.params.Token}</Text>
        <Text>Latitude: {this.props.navigation.state.params.latitudeUser}</Text>
        <Text>Longitude: {this.props.navigation.state.params.longitudeUser}</Text>
        <Text>Slider : {this.props.navigation.state.params.SliderValue}</Text>
        <Text>บ้านเดี่ยว : {this.props.navigation.state.params.single_home_Picker}</Text>
        <Text>บ้านเดี่ยว : {this.props.navigation.state.params.Twin_Home_Picker}</Text>
        <Text>บ้านเดี่ยว : {this.props.navigation.state.params.TownHouse_Picker}</Text>
        <Text>บ้านเดี่ยว : {this.props.navigation.state.params.Condo_Picker}</Text>
        <Text>บ้านเดี่ยว : {this.props.navigation.state.params.Panid_Picker}</Text>
        <Text>บ้านเดี่ยว : {this.props.navigation.state.params.TownHome_Picker}</Text> */}

    

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "#F4aa"
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