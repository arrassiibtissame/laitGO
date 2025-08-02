import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

const BarcodeScanner = ({ onScan, onCancel }) => {
  const cameraRef = useRef(null);

  const handleBarCodeRead = ({ data }) => {
    if (onScan) onScan(data);
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
        onBarCodeRead={handleBarCodeRead}
        androidCameraPermissionOptions={{
          title: 'Permission caméra',
          message: 'LaitGO a besoin d\'accéder à la caméra',
          buttonPositive: 'OK',
          buttonNegative: 'Annuler',
        }}
      />
      <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
        <Text style={styles.cancelText}>Annuler</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  preview: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cancelButton: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 40,
  },
  cancelText: {
    color: '#A3C9A8',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default BarcodeScanner; 