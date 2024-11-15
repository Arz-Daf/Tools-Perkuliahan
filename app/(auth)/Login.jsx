import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Pastikan Anda sudah memasang 'expo/vector-icons'
import { router, Stack } from 'expo-router';
import { supabase } from '../../libs/supabase';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Text style={styles.logoText}>
                <Text style={styles.toolsText}>Tools </Text>
                <Text style={styles.perkuliahanText}>Perkuliahan</Text>
              </Text>
            </View>

            <Text style={styles.headerText}>Login to your account</Text>
            <Text style={styles.subHeaderText}>Welcome back! Please enter your details.</Text>

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
                <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="gray" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity disabled={loading} style={styles.loginButton} onPress={signInWithEmail}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { router.push('/Signup') }}>
              <Text style={styles.signUpText}>Sign up</Text>
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
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  logoContainer: {
    marginBottom: 0,
    marginTop: 50,// Atur margin ini agar tetap jauh dari keyboard
    alignItems: 'center',
  },
  logoText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  toolsText: {
    color: '#FED542', // Warna kuning
  },
  perkuliahanText: {
    color: '#093DF4', // Warna biru
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 50,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
  },
  input: {
    width: '90%',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
  },
  loginButton: {
    backgroundColor: '#3470A2', // Warna biru tombol login
    paddingVertical: 16,
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signUpText: {
    color: '#3470A2', // Warna biru teks sign up
    fontSize: 16,
  },
});
