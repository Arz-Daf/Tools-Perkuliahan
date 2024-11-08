import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { toolsData } from '../libs/data'; // Pastikan path ini benar

export default function App() {
  const { detail } = useLocalSearchParams();
  const tool = toolsData.find((item) => item.id === detail); // Mencari data yang sesuai dengan ID

  if (!tool) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Data tidak ditemukan</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <View style={styles.arrow}>
            <View style={styles.arrowLine1} />
            <View style={styles.arrowLine2} />
          </View>
        </TouchableOpacity>
        <Text style={styles.headerText}>Tools Perkuliahan</Text>
        <Image
          source={{
            uri: 'https://example.com/profile.jpg', // Ganti dengan URL gambar yang benar
          }}
          style={styles.profileImage}
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>Panduan Pemakaian</Text>
      <Text style={styles.subtitle}>{tool.title}</Text>

      {/* Image */}
      <Image source={{ uri: tool.imageUri }} style={styles.toolImage} />

      {/* Description */}
      <ScrollView style={styles.descriptionContainer}>
        <Text style={styles.description}>{tool.description}</Text>
      </ScrollView>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButtonBottom} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Kembali</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 40,
    borderRadius: 24,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backButton: {
    padding: 10,
  },
  arrow: {
    width: 24,
    height: 24,
    transform: [{ rotate: '90deg' }],
  },
  arrowLine1: {
    width: 2,
    height: 24,
    backgroundColor: 'black',
    position: 'absolute',
    transform: [{ rotate: '90deg' }],
  },
  arrowLine2: {
    width: 18,
    height: 12,
    backgroundColor: 'black',
    position: 'absolute',
    left: -12,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#545F71',
    fontFamily: 'Outfit',
  },
  profileImage: {
    width: 65,
    height: 68,
    borderRadius: 50,
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
    color: '#545F71',
    fontFamily: 'Outfit',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    fontFamily: 'Outfit',
    marginVertical: 10,
  },
  toolImage: {
    marginTop: 20,
    width: 100,
    height: 100,
  },
  descriptionContainer: {
    marginTop: 20,
    width: '90%',
    paddingHorizontal: 10,
  },
  description: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'Outfit',
    lineHeight: 22,
  },
  backButtonBottom: {
    marginTop: 20,
    width: 117,
    height: 39,
    backgroundColor: '#3470A2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
  },
  backButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
    fontFamily: 'Outfit',
    textAlign: 'center',
  },
  errorText: {
    marginTop: 20,
    fontSize: 18,
    color: 'red',
    fontWeight: '700',
  },
});
