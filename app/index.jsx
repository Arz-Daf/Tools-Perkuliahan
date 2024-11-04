
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const allApps = [
    { id: 'xampp', name: 'XAMPP', programStudi: 'Sistem Informasi', mataKuliah: 'Pemrograman Web', image: 'https://seeklogo.com/images/X/xampp-logo-1C1A9E3689-seeklogo.com.png' },
    { id: 'netbeans', name: 'Netbeans', programStudi: 'Sistem Informasi', mataKuliah: 'Pemrograman Web', image: 'https://i0.wp.com/gluonhq.com/wp-content/uploads/2015/09/netbeans-logo-21.png?fit=224%2C224&ssl=1' },
    { id: 'figma', name: 'Figma', programStudi: 'Sistem Informasi', mataKuliah: 'Perancangan User Experience', image: 'https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-1024.png' },
    { id: 'camscanner', name: 'CamScanner', programStudi: 'Sistem Informasi', mataKuliah: 'Literasi Digital', image: 'https://play-lh.googleusercontent.com/eWYNxjXiub6-HqtwoS2d4bl-NkqcKgOHansSnXXqje8-K9XLRwflOgEYwSzPMicdAA=w480-h960-rw' },
    { id: 'wpsoffice', name: 'WPS Office', programStudi: 'Sistem Informasi', mataKuliah: 'Literasi Digital', image: 'https://play-lh.googleusercontent.com/DUohbTj-FKR_48Dav1c-1QZTSo6D0CzVNSO28RYhC2AH8_3B93AO3lTF3S2PKPQHeQY=s96-rw' }
  ];

  const [programStudi, setProgramStudi] = useState('');
  const [mataKuliah, setMataKuliah] = useState('');
  const [filteredApps, setFilteredApps] = useState(allApps);

  const handleFilterApps = (ps, mk) => {
    if (ps || mk) {
      const filtered = allApps.filter(app => 
        (ps ? app.programStudi === ps : true) && (mk ? app.mataKuliah === mk : true)
      );
      setFilteredApps(filtered);
    } else {
      setFilteredApps(allApps); // Kembalikan ke daftar semua aplikasi
    }
  };

  const handleProgramStudiChange = (value) => {
    setProgramStudi(value);
    handleFilterApps(value, mataKuliah);
  };

  const handleMataKuliahChange = (value) => {
    setMataKuliah(value);
    handleFilterApps(programStudi, value);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          <Text style={styles.tools}>Tools</Text> <Text style={styles.perkuliahan}>Perkuliahan</Text>
        </Text>
        <Image source={{ uri: 'https://media.licdn.com/dms/image/v2/D5603AQH0qgtYSlO8Qw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718282402772?e=1735171200&v=beta&t=1YiTVqQZYtfLQzt54V0qAlObcsXZapW5rAULBjN6UqE' }} style={styles.profileImage} />
      </View>

      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={programStudi}
          style={styles.picker}
          onValueChange={(itemValue) => handleProgramStudiChange(itemValue)}
        >
          <Picker.Item label="Program Studi" value="" />
          <Picker.Item label="Sistem Komputer" value="Sistem Komputer" />
          <Picker.Item label="Teknik Informatika" value="Teknik Informatika" />
          <Picker.Item label="Sistem Informasi" value="Sistem Informasi" />
        </Picker>

        <Picker
          selectedValue={mataKuliah}
          style={styles.picker}
          onValueChange={(itemValue) => handleMataKuliahChange(itemValue)}
        >
          <Picker.Item label="Mata Kuliah" value="" />
          <Picker.Item label="Pemrograman Web" value="Pemrograman Web" />
          <Picker.Item label="Perancangan User Experience" value="Perancangan User Experience" />
          <Picker.Item label="Literasi Digital" value="Literasi Digital" />
        </Picker>

        <TextInput
          placeholder="Cari Aplikasi"
          style={styles.searchBox}
        />
      </View>

      <View style={styles.appList}>
        {filteredApps.length > 0 ? (
          filteredApps.map((app, index) => (
            <TouchableOpacity key={index} style={styles.appButton} onPress={()=>{
              router.push({pathname:'/[id]',params:{id:app.id}})
            }}>
              <Image source={{ uri: app.image }} style={styles.appIcon} />
              <Text style={styles.appText}>{app.name}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noAppsText}>Tidak ada aplikasi yang ditemukan</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1
  },
  tools: {
    color: '#fca311'
  },
  perkuliahan: {
    color: '#007bff'
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  dropdownContainer: {
    marginVertical: 20
  },
  picker: {
    height: 50,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10
  },
  searchBox: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10
  },
  appList: {
    marginVertical: 20
  },
  appButton: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  appIcon: {
    width: 40,
    height: 40,
    marginRight: 10
  },
  appText: {
    fontSize: 16
  },
  noAppsText: {
    fontSize: 16,
    color: '#aaa'
  }
});
