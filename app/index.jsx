import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function App() {
  return (
    <View style={{
        flex:1,
        margin:24,
        alignItems:'center',
        justifyContent:'center'
    }}>
      <Link href="/(home)">App</Link>
    </View>
  )
}