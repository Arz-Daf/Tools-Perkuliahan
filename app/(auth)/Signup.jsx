import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Pastikan Anda sudah memasang 'expo/vector-icons'
import { Stack } from "expo-router";
import { supabase } from "../../libs/supabase";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function signUpWithEmail() {
    setLoading(true);
    if (password !== confirmPassword) {
      return Alert.alert("Password doesnt match")
    }
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert(error.message);
    } else {
      Alert.alert("success");
    }
    // if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false);
  }
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerBackTitleVisible: false,
          title:"" 
        }}
      />

      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>
            <Text style={styles.toolsText}>Tools </Text>
            <Text style={styles.perkuliahanText}>Perkuliahan</Text>
          </Text>
        </View>

        <Text style={styles.headerText}>Create your account</Text>
        <Text style={styles.subHeaderText}>
          Please fill in the details to sign up.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email address"
          value={email}
          onChangeText={(text)=>{setEmail(text)}}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            value={password}
            onChangeText={(text)=>{setPassword(text)}}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(text)=>{setConfirmPassword(text)}}
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Ionicons
              name={showConfirmPassword ? "eye-off" : "eye"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signUpButton} disabled={loading} onPress={signUpWithEmail}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  logoContainer: {
    position: "absolute",
    top: 220,
    alignItems: "center",
  },
  logoText: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 32,
  },
  toolsText: {
    color: "#FED542", // Warna kuning
  },
  perkuliahanText: {
    color: "#093DF4", // Warna biru
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 50,
  },
  subHeaderText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 32,
  },
  input: {
    width: "90%",
    padding: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
  },
  signUpButton: {
    backgroundColor: "#3470A2", // Warna biru tombol login
    paddingVertical: 16,
    borderRadius: 8,
    width: "90%",
    alignItems: "center",
    marginTop: 16,
  },
  signUpButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
