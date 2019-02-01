import React, { Component } from 'react';
import { View, Text } from 'react-native';

import ReactNativeItemSelect from 'react-native-item-select';



const textStyle = { textAlign: 'center', color: '#696969', fontWeight: 'bold' };
const data = [
  { firstLetter: 'அ', displayName: 'தமிழ்', name: 'Tamil' },
  { firstLetter: 'A', displayName: 'English', name: 'English' },
];
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {{backgroundColor : 'red' , flex:1}}>
         <ReactNativeItemSelect
        data={data}
        
        itemComponent={
          
          item => (
            <View>
                <Text style={{ ...textStyle, fontSize: 35 }}>{item.firstLetter}</Text>
                <Text style={textStyle}>{item.displayName}</Text>
            </View>
          ) 
        }
        multiselect = {true}
        onSubmit={item => navigate('Result')}
      />
      </View>
    );
  }
}
