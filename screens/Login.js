import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";

function Button(props) {
  return (
    <TouchableOpacity
      style={{
        height: 48,
        backgroundColor: "#6CC066",
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        borderRadius: 23,
        shadowColor: "#6CC06678",
        ...props.style
      }}
      onPress={props.onPress}
    >
      <Text
        style={{
          color: "white",
          fontFamily: "nunito-bold"
        }}
      >
        {props.children}
      </Text>
    </TouchableOpacity>
  );
}

export default class LoginScreen extends React.Component {
  handleFacebookLogin = () => {
    Alert.alert("Login Placeholder", "Facebook");
  };

  handleGoogleLogin = () => {
    Alert.alert("Login Placeholder", "Google");
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#2E2E2E" }}>
        <View
          style={{
            flex: 0.9,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              fontFamily: "nunito-bold",
              color: "#6CC066",
              fontSize: 24
            }}
          >
            Together{" "}
            <Text style={{ color: "white" }}>against COVID-19!</Text>
          </Text>
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
              marginTop: 18,
              marginBottom: 36
            }}
          >
            Help others by staying at home during the COVID-19
            pandemic.
          </Text>
          <Button onPress={this.handleFacebookLogin}>
            Join with Facebook
          </Button>
          <Button
            onPress={this.handleGoogleLogin}
            style={{ marginTop: 24 }}
          >
            Join with Google
          </Button>
        </View>
      </View>
    );
  }
}
