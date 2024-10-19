import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        {/* Back Arrow */}
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.arrowText}>{'<'}</Text>
        </TouchableOpacity>
        {/* Title */}
        <Text style={styles.titleText}>Tools Perkuliahan</Text>
        {/* Profile Image */}
        <Image
          source={{ uri: 'https://media.licdn.com/dms/image/v2/D4D03AQGGTZkFr1HSlQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1674275024962?e=1733961600&v=beta&t=4XJSNrZtr_aaugs5jw5Wykkl4iFLzShNFEUZ1vqTPTs' }} // Replace with actual profile picture URL
          style={styles.profileImage}
        />
      </View>

      {/* XAMPP Title */}
      <Text style={styles.xamppTitle}>XAMPP</Text>

      {/* XAMPP Image */}
      <View style={styles.xamppImageContainer}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/XAMPP_Logo.png' }} // Replace with actual XAMPP image URL
          style={styles.xamppImage}
        />
      </View>

      {/* Confirmation Box */}
      <View style={styles.confirmationBox}>
        <Text style={styles.confirmationTitle}>Konfirmasi</Text>
        <Text style={styles.confirmationMessage}>
          Link pengunduhan akan dikirimkan melalui e-mail anda. Terima kasih
        </Text>
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Unduh</Text>
        </TouchableOpacity>
      </View>

      {/* Guide Section */}
      <View style={styles.footer}>
        <Text style={styles.guideText}>Panduan Pemakaian</Text>
        <TouchableOpacity style={styles.footerDownloadButton}>
          <Text style={styles.footerDownloadButtonText}>Unduh</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    padding: 10,
  },
  arrowText: {
    fontSize: 24,
    color: 'black',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Outfit',
    color: '#545F71',
    textAlign: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  xamppTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    marginTop: 20,
  },
  xamppImageContainer: {
    width: 208,
    height: 211,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  xamppImage: {
    width: '100%',
    height: '100%',
  },
  confirmationBox: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.47,
    shadowRadius: 4.65,
    elevation: 6,
  },
  confirmationTitle: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Outfit',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  confirmationMessage: {
    fontSize: 16,
    fontFamily: 'Outfit',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  downloadButton: {
    backgroundColor: '#3470A2',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
  },
  downloadButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Outfit',
    fontWeight: '700',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  guideText: {
    fontSize: 15,
    fontFamily: 'Outfit',
    fontWeight: '700',
    color: 'black',
  },
  footerDownloadButton: {
    backgroundColor: '#3470A2',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  footerDownloadButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Outfit',
    fontWeight: '600',
  },
});