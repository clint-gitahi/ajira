import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList
} from "react-native";
import firebase from "react-native-firebase";
import Toast from "react-native-simple-toast";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as employeeActions from "../actions/employeeActions";

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
        getEmployeeFail("Failed to fetch Employee Data");
      });
  }

  renderEmployeeList() {
    return this.props.menus.map((item, index) => {
      console.log(item);
    });
  }

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
          <FlatList
            data={this.props.employees.employees}
            renderItem={({ item }) => <Text />}
          />
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
