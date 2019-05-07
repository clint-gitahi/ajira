import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";

export default class Landing extends Component {
  static navigationOptions = {
    header: null
  };

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
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            bottom: 20,
            left: 0,
            position: "absolute"
          }}
        >
          <View style={{ flex: 4 }}>
            <Button title="Login" onPress={this.onLoginPress} color="#06b7cc" />
          </View>

          <View style={{ flex: 4 }}>
            <Button
              title="Sign Up"
              onPress={this.onRegisterPress}
              color="#fb9b03"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
});
