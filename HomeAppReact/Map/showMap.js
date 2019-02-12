import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import MapView from 'react-native-maps';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from "react-native-responsive-screen";

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
      SplashScreen.hide();
      console.log("Call  Render")
    return (
    <View style ={styles.container}>
        <View style = {{height : hp("30%"),width : wp("100%"),backgroundColor : '#fff'}}>

        </View>
        <MapView
          style={styles.map}
          initialRegion={{
            //  this.props.navigation.state.params.item.PROJECT_NAME
            // initial region set to Bileto
             latitude: 13.8334,
             longitude: 100.5704,

           // latitude: lat,
           // longitude: lang,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}>

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