import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { 
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator,
    createBottomTabNavigator, 
    BottomTabBar,
    
} from "react-navigation";
import NewHome from './NewHome';
import TopHome from './TopHome';
import TownHouse from './TownHouse';
import { Icon } from 'react-native-elements'
//import { Drawer } from 'react-native-paper';


/*const AppNavigator = createStackNavigator({
    
   
    TopHome:{
        screen: TopHome
    },
    TownHouse:{
        screen: TownHouse
    }
    
})*/

const Drawer = createDrawerNavigator({
    NewHome:{
        screen: NewHome
    },
    TopHome:{
        screen: TopHome
    },
  
});



/*const BottomTab = createBottomTabNavigator({ 
    NewHome:{
        screen: NewHome
    },
    TopHome:{
        screen: TopHome
    },
    TownHouse:{
        screen: TownHouse
    }      
});*/

const TabBarComponent = (props) => (<BottomTabBar {...props} />);

const App = createAppContainer(Drawer)
/*const App = createAppContainer(createBottomTabNavigator(
{
    บ้านใหม่:{screen:DrawerNewHome},
    บ้านชั้นนำ:{screen: DrawerNewHome},
    
},
{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'บ้านใหม่') {
          iconName = `account-alert${focused ? '' : '-outline'}`;
          
        } else if (routeName === 'บ้านชั้นนำ') {
          iconName = `account-circle${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        // return <Ionicons name={iconName} size={25} color={tintColor} />;
        return <Icon
        name={iconName}
        type='material-community'
        color={tintColor}
      />
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }

))*/
export default class MainNavigation extends Component {
  render() {
    return (
      <App/>
    );
  }
}
