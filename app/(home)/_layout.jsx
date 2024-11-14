import { View, Text } from 'react-native'
import React from 'react'
import { useAuth } from '../../providers/AuthProviders'
import { Redirect, Slot, Stack } from 'expo-router'

export default function HomeLayout() {
    const {user} = useAuth()
    
    if(!user){
      return <Redirect href="/(auth)/Login"/>
    }
  return (
    <Stack>
      <Stack.Screen name='[id]' options={{headerShown:false}}/>
      <Stack.Screen name='DetailScreen' options={{headerShown:false}}/>
      <Stack.Screen name='index' options={{headerShown:false}}/>
    </Stack>
  )
}