import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { toolsData } from '../../libs/data';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  const { id } = useLocalSearchParams();
  const tool = toolsData.find((item) => item.id === id);

  // State untuk mengatur visibilitas modal
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <AntDesign name='arrowleft' size={20}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>Tools Perkuliahan</Text>
        <Image
          source={{
            uri: 'https://media.licdn.com/dms/image/v2/D5603AQH0qgtYSlO8Qw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718282402772?e=1735171200&v=beta&t=1YiTVqQZYtfLQzt54V0qAlObcsXZapW5rAULBjN6UqE',
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
        <TouchableOpacity
          onPress={() => router.push({ pathname: 'DetailScreen', params: { id: tool.id } })} // Navigasi ke DetailScreen dengan ID tool
        >
          <Text style={styles.guideText}>Panduan{'\n'}Pemakaian</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.downloadButton}
          onPress={() => setModalVisible(true)} // Tampilkan modal ketika tombol "Unduh" ditekan
        >
          <Text style={styles.downloadButtonText}>Unduh</Text>
        </TouchableOpacity>
      </View>

      {/* Modal Konfirmasi */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Konfirmasi</Text>
            <Text style={styles.modalText}>
              Link pengunduhan akan dikirimkan melalui e-mail anda. Terima kasih
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)} // Tutup modal ketika tombol ditekan
            >
              <Text style={styles.modalButtonText}>Unduh</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Styles tetap sama...

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
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  modalText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'black',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#3470A2',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
