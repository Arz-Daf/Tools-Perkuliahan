import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Link href="/(home)">
        <Image source={require('../assets/tools.png')} style={styles.logo} />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,  
    height: 120,
    resizeMode: 'contain',
  },
});