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
      <View style={{ flex: 1, backgroundColor: "darkgrey" }}>
        <View style={{ flex: 1, backgroundColor: "darkgrey" }}>
          <Text>Top</Text>
        </View>
        <View
          style={{
            flex: 1,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            backgroundColor: "white",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontFamily: "nunito-bold",
              color: "#8B8B8B",
              fontSize: 14,
              marginTop: 36
            }}
          >
            Welcome to
          </Text>
          <Text
            style={{
              fontFamily: "nunito-black",
              fontSize: 32
            }}
          >
            CareAnTiny
          </Text>
          <Text
            style={{
              fontFamily: "nunito",
              fontSize: 16,
              color: "#8B8B8B",
              maxWidth: 300,
              textAlign: "center",
              marginTop: 18
            }}
          >
            Help others by staying at home during the COVID-19
            pandemic.
          </Text>
        </View>
      </View>
    );

    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text
          style={{
            fontFamily: "nunito-bold",
            fontSize: 30,
            marginBottom: 20
          }}
        >
          Stay at Home
        </Text>
        <Text
          style={{
            fontFamily: "nunito",
            fontSize: 20,
            marginBottom: 20
          }}
        >
          Login
        </Text>
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
