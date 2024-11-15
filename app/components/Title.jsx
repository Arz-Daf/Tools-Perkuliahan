import { View, Text } from "react-native";
import React from "react";

export default function Title() {
  return (
    <View style={{
        marginTop:5,
        flex:1,
        alignItems:"center"
    }}>
      <Text
        style={{
          fontSize: 24,
          alignItems:"center",
          fontWeight: "bold",
          textAlign: "center",
          alignSelf:"center",
          justifyContent:"center",
          flex: 1,
        }}
      >
        <Text style={{ color: "#fca311" }}>Tools</Text>{" "}
        <Text style={{ color: "#007bff" }}>Perkuliahan</Text>
      </Text>
    </View>
  );
}
