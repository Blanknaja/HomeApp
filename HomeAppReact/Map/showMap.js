import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import MapView from 'react-native-maps';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from "react-native-responsive-screen";
  import { Header, } from "react-native-elements";
export default class showMap extends Component {
    static navigationOptions = {
        drawerLabel: () => null
    }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }
  
  onRegionChange(region) {
    this.setState({ region });
  }
  render() {
     // SplashScreen.hide();
      console.log("Call  Render")
      const latFromList = parseFloat(this.props.navigation.state.params.latFromList);
      const langFromList = parseFloat(this.props.navigation.state.params.langFromList);
      const NamePlace = this.props.navigation.state.params.dataSourceFromList[0].PROJECT_NAME;
      const Description = this.props.navigation.state.params.dataSourceFromList[0].PRJ_TYPE;
    return (
    <View style ={styles.container}>
        {/* <View style = {{height : hp("30%"),width : wp("100%"),backgroundColor : '#fff'}}>
          <Text>{this.props.navigation.state.params.dataSourceFromList[0].PROJECT_NAME}</Text>
        </View> */}
        <View style ={styles.header}>
        <View style={[styles.header]}>
          <Header
            statusBarProps={{ barStyle: "light-content" }}
            barStyle="light-content" // or directly
            leftComponent={{
              icon: "menu",
              color: "#fff",
              onPress: () => {
               // this.props.navigation.goBack();
              }
            }}
            centerComponent={{
              text: "รายการบ้านใหม่",
              style: { color: "#fff", fontSize: 25, fontWeight: "bold" }
            }}
            containerStyle={{
             // backgroundColor: "#0066CC",
              backgroundColor: 'rgba(200, 52, 52, 0.8)',
              justifyContent: "space-around",
              height: hp("15%")
            }}
          />
        </View>

        </View>
        <MapView
          style={styles.map}
          initialRegion={{
            //  this.props.navigation.state.params.item.PROJECT_NAME
            // initial region set to Bileto
             latitude: latFromList,
             longitude: langFromList,

           // latitude: lat,
           // longitude: lang,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}>
          <MapView.Marker
            coordinate = {{
              latitude : latFromList,
              longitude : langFromList
            }}
            title={NamePlace}
            description = {Description}>

          </MapView.Marker>
        </MapView>
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
    map:{
        flex : 1
    },
    header: {
      height: hp("15%"),
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
     // backgroundColor: "#03A9F4",
      backgroundColor : 'rgba(200, 52, 52, 0.8)',
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