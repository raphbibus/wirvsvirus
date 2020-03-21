import React from "react";
import { Text, View } from "react-native";

export default class HomeScreen extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>Home</Text>
        <Text>Hallo {user.display_name}!</Text>
      </View>
    );
  }
}
