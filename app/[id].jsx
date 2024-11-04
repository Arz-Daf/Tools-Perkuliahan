import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { toolsData } from '../libs/data';

export default function App() {
  const { id } = useLocalSearchParams()
  const tool = toolsData.find((item) => item.id === id); // Mencari data yang sesuai dengan ID
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
            uri: 'https://media.licdn.com/dms/image/v2/D4D03AQGGTZkFr1HSlQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1674275024962?e=1733961600&v=beta&t=4XJSNrZtr_aaugs5jw5Wykkl4iFLzShNFEUZ1vqTPTs',
          }}
          style={styles.profileImage}
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>{tool.title}</Text>

      {/* Image */}
      <Image source={{ uri: tool.imageUri }} style={styles.toolImage} />

      {/* Description */}
      <Text style={styles.description}>{tool.description}</Text>

      {/* Guide and Download */}
      <View style={styles.footer}>
        <Text style={styles.guideText}>Panduan{'\n'}Pemakaian</Text>
        <TouchableOpacity
          style={styles.downloadButton}
          onPress={() => {
            router.push('/popup');
          }}
        >
          <Text style={styles.downloadButtonText}>Unduh</Text>
        </TouchableOpacity>
      </View>
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
    fontWeight: '600',
    color: 'black',
    fontFamily: 'Outfit',
  },
  toolImage: {
    marginTop: 20,
    width: 208,
    height: 211,
  },
  description: {
    marginTop: 20,
    width: 236,
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Outfit',
    lineHeight: 22,
  },
  footer: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  guideText: {
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Outfit',
    color: 'black',
  },
  downloadButton: {
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
  downloadButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
    fontFamily: 'Outfit',
    textAlign: 'center',
  },
});