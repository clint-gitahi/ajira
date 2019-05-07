import React, { Component } from "react";
import { View, Button } from "react-native";

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.onLoginPress = this.onLoginPress.bind(this);
    this.onRegisterPress = this.onRegisterPress.bind(this);
  }

  onLoginPress() {
    this.props.navigation.navigate("Login");
  }

  onRegisterPress() {
    this.props.navigation.navigate("SignUp", {
      parentNavigation: this.props.navigation
    });
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Button title="Login" onPress={this.onLoginPress} />
        <Button title="Sign Up" onPress={this.onRegisterPress} />
      </View>
    );
  }
}
