import React from "react";
import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/Login";
import { AsyncStorage, Text, ScrollView } from "react-native";
import Api from "./utils/api";
import { apisAreAvailable } from "expo";

export default class App extends React.Component {
  state = {
    user: null,
    error: null
  };

  async componentDidMount() {
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
