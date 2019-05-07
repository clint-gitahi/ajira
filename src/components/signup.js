import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator
} from "react-native";
import firebase from "react-native-firebase";

export default class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    errorMessage: null,
    loading: false
  };

  handleSignUp = () => {
    if (this.state.password === "" || this.state.email === "") {
      this.setState({ errorMessage: "Email and Password is required" });
    } else {
      this.setState({ loading: true });
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
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
          <Text>Signing Up</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text>Sign Up</Text>
          {this.state.errorMessage && (
            <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
          )}

          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />

          <TextInput
            secureTextEntry
            placeholder="Password"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />

          <Button title="Sign Up" onPress={this.handleSignUp} />
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
    alignItems: "center"
  },
  textInput: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8
  }
});
