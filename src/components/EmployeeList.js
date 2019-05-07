import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity
} from "react-native";
import firebase from "react-native-firebase";
import Toast from "react-native-simple-toast";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as employeeActions from "../actions/employeeActions";
import EmployeeItemList from "./EmployeeItemList";

class EmployeeList extends Component {
  static navigationOptions = {
    title: "Employee List"
  };

  state = { currentUser: null, loading: false };

  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
    Toast.show(`Welcome ${currentUser && currentUser.email}`, Toast.LONG);

    // importing employee actions.
    const {
      getEmployees,
      getEmployeesSuccess,
      getEmployeeFail
    } = this.props.employeeActions;

    this.setState({ loading: true });
    getEmployees()
      .then(res => {
        this.setState({ loading: false });
        getEmployeesSuccess(res.data.data);
      })
      .catch(error => {
        this.setState({ loading: false });
        getEmployeeFail(
          "Failed to fetch Employee Data, Please Check your connection."
        );
      });
  }

  // opening the profile screen
  openProfile = item => {
    this.props.navigation.navigate("Profile", item);
  };

  noDisplay() {
    return <View />;
  }

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

  _keyExtractor = (item, index) => index.toString();

  _renderEmployee = ({ item, index }) => (
    <TouchableOpacity onPress={() => this.openProfile(item)}>
      <Text>Name: {item[8]}</Text>
      <Text>Dept: {item[14]}</Text>
      <Text>Div: {item[15]}</Text>
    </TouchableOpacity>
  );

  render() {
    console.log(this.props);

    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
          <Text>Loading</Text>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          {this.props.employees.error !== "" ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{ color: "red", textAlign: "center" }}>
                {this.props.employees.error}
              </Text>
            </View>
          ) : (
            <FlatList
              data={this.props.employees.employees}
              renderItem={this._renderEmployee}
              keyExtractor={this._keyExtractor}
              ListEmptyComponent={this.noItemDisplay}
              ItemSeparatorComponent={this.renderSeparator}
            />
          )}
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    employeeActions: bindActionCreators(employeeActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeList);
