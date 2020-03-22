import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import Button from "../components/GreenButton";

export default class LoginScreen extends React.Component {
  handleFacebookLogin = () => {
    // Handle here or pass up to App?
    this.props.onLogin();
  };

  handleGoogleLogin = () => {
    // Handle here or pass up to App?
    this.props.onLogin();
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
