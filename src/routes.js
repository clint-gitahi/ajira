import React from "react";
import { SwitchNavigator, StackNavigator } from "react-navigation";

import Landing from "./components/landing";
import Loading from "./components/loading";
import SignUpScreen from "./components/signup";
import LoginScreen from "./components/login";
import EmployeeList from "./components/EmployeeList";
import Profile from "./components/Profile";

const AuthStack = StackNavigator({
  Landing: { screen: Landing },
  Login: { screen: LoginScreen },
  SignUp: { screen: SignUpScreen }
});

const AppStack = StackNavigator({
  EmployeeList: EmployeeList,
  Profile: Profile
});

export default SwitchNavigator(
  {
    Loading: Loading,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "Loading"
  }
);
