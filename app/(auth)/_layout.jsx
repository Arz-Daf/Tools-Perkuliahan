import { View, Text, AppState } from "react-native";
import React from "react";
import { Redirect, Slot, Stack } from "expo-router";
import { supabase } from "../../libs/supabase";
import { useAuth } from "../../providers/AuthProviders";


  
export default function AuthLayout() {
  const {user} = useAuth()
  if (user) {
    return <Redirect href="/(home)"/>
  }
  return <Stack>
    <Stack.Screen name="Login"/>
    <Stack.Screen name="Signup"/>
  </Stack>;
}
