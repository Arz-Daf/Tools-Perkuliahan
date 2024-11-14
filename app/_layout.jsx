import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Slot, Stack } from 'expo-router'
import AuthProvider from '../providers/AuthProviders'

export default function RootLayout() {
    return (
        <AuthProvider>
           <Slot/>
        </AuthProvider>
    )
}