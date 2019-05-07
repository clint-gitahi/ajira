import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

class EmployeeItemList extends Component {
  constructor(props) {
    super(props);
  }

  openProfile(item) {
    console.log(item);
  }

  _keyExtractor = (item, index) => index.toString();

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE"
        }}
      />
    );
  };

  render() {
    console.log(this.props.employeeItem);

    return this.props.employeeItem.map((item, index) => {
      return (
        <View key={index}>
          <Text>{item}</Text>
        </View>
      );
    });
  }
}

export default EmployeeItemList;
