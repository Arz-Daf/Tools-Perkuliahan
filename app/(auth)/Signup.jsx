import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
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
      setLoading(false);
      return Alert.alert("Password doesn't match");
    }
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert(error.message);
    } else {
      Alert.alert("Success! Please check your inbox for email verification.");
    }
    setLoading(false);
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerBackTitleVisible: false,
          title: ""
        }}
      />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Text style={styles.logoText}>
                <Text style={styles.toolsText}>Tools </Text>
                <Text style={styles.perkuliahanText}>Perkuliahan</Text>
              </Text>
            </View>

            <Text style={styles.headerText}>Create your account</Text>
            <Text style={styles.subHeaderText}>Please fill in the details to sign up.</Text>

            <TextInput
              style={styles.input}
              placeholder="Email address"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
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
                onChangeText={setConfirmPassword}
                secureTextEntry={!showConfirmPassword}
              />
              <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
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
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 0,
    marginTop: 50,
  },
  logoText: {
    fontSize: 35,
    fontWeight: "bold",
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
    marginTop: 20,
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
