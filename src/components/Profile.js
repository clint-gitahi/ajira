import React, { Component } from "react";

import { View, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Profile extends Component {
  static navigationOptions = {
    title: "Profile"
  };

  render() {
    console.log("profile props", this.props);
    return (
      <View>
        <Text>dfadfd</Text>
      </View>
    );
  }
}

export default Profile;
