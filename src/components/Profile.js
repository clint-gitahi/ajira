import React, { Component } from "react";
import { View, Text } from "react-native";

class Profile extends Component {
  static navigationOptions = {
    title: "Profile"
  };

  render() {
    console.log("profile props", this.props);
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>{params[8]}</Text>
        <Text>{params[14]}</Text>
        <Text>{params[15]}</Text>
        <Text>{params[16]}</Text>
        <Text>{params[17]}</Text>
      </View>
    );
  }
}

export default Profile;
