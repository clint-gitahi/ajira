import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "react-native-firebase";

class EmployeeList extends Component {
  static navigationOptions = {
    title: "Employee List"
  };

  state = { currentUser: null };

  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }

  render() {
    const { currentUser } = this.state;
    console.log(currentUser);
    return (
      <View style={styles.container}>
        <Text>Hi {currentUser && currentUser.email}!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default EmployeeList;
