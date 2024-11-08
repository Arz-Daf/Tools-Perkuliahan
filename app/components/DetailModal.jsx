import { View, Text, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'

export function DetailModal({userGuide}) {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
    <TouchableOpacity
          
          onPress={() => setModalVisible(true)} // Tampilkan modal ketika tombol "Unduh" ditekan
        >
          <Text>Panduan Pemakaian</Text>
        </TouchableOpacity>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View>
          <View >
            <Text >Cara Pemakaian</Text>
            {userGuide.map((row, index)=>(
                <View >
                    <Text>{index+1}</Text>
                    <Text>{row}</Text>
                </View>
            ))}
            <TouchableOpacity
              
              onPress={() => setModalVisible(false)} // Tutup modal ketika tombol ditekan
            >
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  )
}
