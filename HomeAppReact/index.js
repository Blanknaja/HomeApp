/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import test from "./test";
import Main from "./Main";
import {
    SelectMultipleButton,
    SelectMultipleGroupButton
  } from "react-native-selectmultiple-button";

import lay from "./testLayout/lay"; 
import App1 from "./App1";

//import navigators from "./src/navigators";
//import multibutton from "./testPicker/multibutton";
///Tesr picker
//import Homepicker from "./testPicker/Home";
//import first from "./TestSplash/first";
import  MyNavigation  from "./MyNavigation/MainNavigation";

import showMap from "./Map/showMap";

import Mainnavigation from './Structure/MainNavigation';

AppRegistry.registerComponent(appName, () => Mainnavigation);
