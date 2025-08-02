import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carte de la tournée</Text>
      <View style={styles.mapPlaceholder}>
        <Text style={{ color: '#6C757D' }}>[Carte interactive ici avec pins des fermes]</Text>
      </View>
      <Text style={styles.info}>Option de navigation via Google Maps à venir.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8F2',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A5A40',
    marginBottom: 18,
    alignSelf: 'center',
  },
  mapPlaceholder: {
    marginTop: 24,
    height: 220,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    marginTop: 18,
    color: '#6C757D',
    textAlign: 'center',
  },
});

export default MapScreen; 