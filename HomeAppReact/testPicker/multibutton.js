import React, { Component } from "react";
import { View, Text } from "react-native";
import ReactNativeItemSelect from "react-native-item-select";

const textStyle = { textAlign: "center", color: "#696969", fontWeight: "bold" };
export default class multibutton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { picIcon: "A", description: "1", name: "Tamil" },
        { picIcon: "B", description: "2", name: "English" },
        { picIcon: "C", description: "3", name: "Tamil" },
        { picIcon: "D", description: "4", name: "Tamil" },
        { picIcon: "E", description: "5", name: "Tamil" },
        { picIcon: "F", description: "6", name: "Tamil" }
      ]
    };
  }

  handelgetData(item){

    console.log(item)
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <ReactNativeItemSelect
          data={this.state.data}
          itemComponent={item => (
            <View>
              <Text style={{ ...textStyle, fontSize: 35 }}>{item.picIcon}</Text>
              <Text style={textStyle}>{item.description}</Text>
            </View>
          )}
          onSubmit={item => this.handelgetData(item)}
          multiselect = {true}
        />
      </View>
    );
  }
}
