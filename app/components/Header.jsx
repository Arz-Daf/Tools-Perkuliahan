import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <AntDesign name="arrowleft" size={20} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Tools Perkuliahan</Text>
      <Image
        source={{
          uri: "https://media.licdn.com/dms/image/v2/D5603AQH0qgtYSlO8Qw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718282402772?e=1735171200&v=beta&t=1YiTVqQZYtfLQzt54V0qAlObcsXZapW5rAULBjN6UqE",
        }}
        style={styles.profileImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  backButton: {
    padding: 10,
  },

  headerText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#545F71",
    fontFamily: "Outfit",
  },
  profileImage: {
    width: 65,
    height: 68,
    borderRadius: 50,
  },
});
