import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function Button(props) {
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
