import React from "react";
import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/Login";
import { AsyncStorage, Text, ScrollView, Alert } from "react-native";
import Api from "./utils/api";
import { apisAreAvailable } from "expo";
import * as Font from "expo-font";

export default class App extends React.Component {
  state = {
    user: null,
    error: null
  };

  async componentDidMount() {
    // Font Usage:
    // <Text style={{ fontFamily: 'nunito-bold' }}>
    Font.loadAsync({
      nunito: require("./assets/fonts/Nunito-Regular.ttf"),
      "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
      "nunito-italic": require("./assets/fonts/Nunito-Italic.ttf")
    });
    // clear local data on app start
    await AsyncStorage.clear();

    const userName = await AsyncStorage.getItem("username");

    if (userName !== null) {
      try {
        const user = await Api.getUser(userName);
        this.setState({ user });
      } catch (e) {
        this.setState({ error: e.message });
      }
    }
  }

  handleLogin = async displayName => {
    //generate a random username
    const userName =
      "user_" +
      displayName.split(" ").join("-") +
      "_" +
      Math.random()
        .toString(36)
        .replace("0.", "");
    try {
      const user = await Api.createUser(userName, displayName);
      await AsyncStorage.setItem("username", userName);
      this.setState({ user });
    } catch (e) {
      this.setState({ error: e.message });
    }
  };

  render() {
    const { error, user } = this.state;

    if (error)
      return (
        <ScrollView>
          <Text style={{ color: "red", margin: 20 }}>
            Error: {error}
          </Text>
        </ScrollView>
      );

    if (user === null)
      return <LoginScreen onLogin={this.handleLogin} />;

    return <HomeScreen user={user} />;
  }
}
