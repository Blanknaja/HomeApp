import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {
    createStackNavigator,
    createDrawerNavigator,
    SafeAreaView,
    createSwitchNavigator
  } from 'react-navigation';
import NewHome from './NewHome';
import TopHome from "./TopHome";


  const MyNavScreen = ({ navigation, banner }) => (
    <ScrollView>
      <SafeAreaView forceInset={{ top: 'always' }}>
        <Text>{banner}</Text>
        <Button onPress={() => navigation.openDrawer()} title="Open drawer" />
        <Button
          onPress={() => navigation.navigate('Email')}
          title="Open other screen"
        />
        <Button onPress={() => navigation.goBack(null)} title="Go back" />
      </SafeAreaView>
      <StatusBar barStyle="default" />
    </ScrollView>
  );

const NewHomeScreen = ({navigation}) => (
    <MyNavScreen banner={'Inbox Screen'} navigation={navigation} />
);
NewHome.navigationOptions = {
    headerTitle : 'NewHome'
};

const TopHomeScreen = ({navigation}) => (
    <MyNavScreen banner={'TopHome Screen'} navigation={navigation} />
);

const SecondHomeScreen = ({navigation}) => (
    <MyNavScreen banner={'SecondHome Screen'} navigation={navigation} />
);

TopHome.navigationOptions = {
    headerTitle: 'SecondHome',
}

const NewHomeStack = createStackNavigator({
    NewHome:{screen : NewHome},
    TopHome :{screen : TopHome},
});



export default class MainNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      SplashScreen.hide();
      console.log("Call")
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}


