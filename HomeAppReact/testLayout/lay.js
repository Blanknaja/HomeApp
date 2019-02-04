import React, { Component } from 'react';
import { View, Text,Dimensions, StyleSheet,ScrollView, } from 'react-native';



var { height } = Dimensions.get('window');
 
var box_count = 3;
var box_height = height / box_count;


export default class lay extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.container}>
            <View style={[styles.header]}>


            </View>
       
            <View style={[styles.content]}>
                <View style={[styles.vSearch]}></View>
            </View>
        
        <View style={[styles.footer]}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: "#010000"
    },
    header: {
      height:  50,
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      backgroundColor: '#03A9F4',
      zIndex: 10
    },
    content: {
    //backgroundColor: '#03A9F4',
      alignItems: 'center',
      marginTop: 50,
      marginBottom: 40,
      
    },
    vSearch:{
        backgroundColor:'red',
        width: 100,
      height: 100,
    },
    footer: {
      height: 40,
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#8BC34A'
    },
    box: {
      width: 100,
      height: 100,
      backgroundColor: '#333',
      marginBottom: 10
    }
  });
