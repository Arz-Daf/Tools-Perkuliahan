import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name='index' />
            <Stack.Screen name='[id]' />
            <Stack.Screen name='DetailScreen' />
        </Stack>
    )
}