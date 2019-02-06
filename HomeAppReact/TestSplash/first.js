import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';


export default class first extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){

    SplashScreen.hide();
  }

  render() {
    return (
      <View style ={styles.container}>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#F44336'
    }
})
