import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Profile extends Component {
  static navigationOptions = {
    title: "Profile",
    headerStyle: {
      backgroundColor: "#80DEEA"
    }
  };

  render() {
    console.log("profile props", this.props);
    const { params } = this.props.navigation.state;
    return (
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View style={styles.customer} elevation={3}>
          <Text style={{ fontWeight: "800", fontSize: 16, color: "#000000" }}>
            Name: {params[8]}
          </Text>
          <Text style={{ fontWeight: "600", fontSize: 15, color: "#000000" }}>
            Department: {params[14]}
          </Text>
          <Text style={{ fontWeight: "500", fontSize: 14 }}>
            Division: {params[15]}
          </Text>
          <Text style={{ fontWeight: "500", fontSize: 14 }}>
            Job type: {params[16]}
          </Text>
          <Text style={{ fontWeight: "500", fontSize: 14 }}>{params[17]}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  customer: {
    backgroundColor: "white",
    borderRadius: 2,
    padding: 10,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
    marginBottom: 8
  }
});
export default Profile;
