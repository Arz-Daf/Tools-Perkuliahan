import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useAuth } from "../../providers/AuthProviders";
import { Redirect, Slot, Stack } from "expo-router";
import Title from "../components/Title";
import { supabase } from "../../libs/supabase";
import Header from "../components/Header";

export default function HomeLayout() {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href="/(auth)/Login" />;
  }
  return (
    <>
      <Slot />
    </>
  );
}
