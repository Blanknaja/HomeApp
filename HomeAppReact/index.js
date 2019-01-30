/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import test from "./test";
import Main from "./Main";

import navigators from "./src/navigators";
AppRegistry.registerComponent(appName, () => App);
