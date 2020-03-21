import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class LoginScreen extends React.Component {
  state = {
    name: ""
  };

  handleLogin = () => {
    const { name } = this.state;
    if (name.length > 3) this.props.onLogin(name);
  };

  render() {
    const { name } = this.state;
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ fontSize: 30, marginBottom: 20 }}>
          Stay at Home
        </Text>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>Login</Text>
        <TextInput
          value={name}
          onChangeText={name => this.setState({ name })}
          style={{
            borderColor: "lightgrey",
            width: 200,
            height: 50,
            borderWidth: 1,
            margin: 10,
            padding: 10
          }}
        />
        <TouchableOpacity
          onPress={this.handleLogin}
          style={{
            backgroundColor: "lightgrey",
            height: 50,
            width: 200,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
