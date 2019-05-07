import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator
} from "react-native";
import firebase from "react-native-firebase";

export default class Login extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#80DEEA"
    }
  };

  state = {
    email: "",
    password: "",
    errorMessage: null,
    loading: false
  };

  handleLogin = () => {
    if (this.state.password === "" || this.state.email === "") {
      this.setState({ errorMessage: "Email and Password is required" });
    } else {
      const { email, password } = this.state;

      this.setState({ loading: true });
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({ loading: false });
          this.props.navigation.navigate("Main");
        })
        .catch(error =>
          this.setState({ loading: false, errorMessage: error.message })
        );
    }
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loadContainer}>
          <ActivityIndicator size="large" />
          <Text>Signing In</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={{ fontWeight: "bold" }}>Login</Text>
          {this.state.errorMessage && (
            <Text style={{ color: "red", textAlign: "center" }}>
              {this.state.errorMessage}
            </Text>
          )}
          <TextInput
            style={styles.textInput}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <Button title="Login" onPress={this.handleLogin} color="#06b7cc" />
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  loadContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  textInput: {
    height: 40,
    width: "90%",
    borderColor: "#B2EBF2",
    borderWidth: 1,
    marginTop: 8
  }
});
