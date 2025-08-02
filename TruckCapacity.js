import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Props: capacity (max), current (actuelle)
const TruckCapacity = ({ capacity, current }) => {
  const percent = Math.min(100, Math.round((current / capacity) * 100));
  return (
    <View style={styles.container}>
      {/* Camion stylisé */}
      <View style={styles.truckBody}>
        <View style={[styles.tank, { width: `${percent}%` }]} />
        <Text style={styles.tankText}>{current} / {capacity} L</Text>
      </View>
      <View style={styles.wheelsContainer}>
        <View style={styles.wheel} />
        <View style={styles.wheel} />
      </View>
      <Text style={styles.label}>Capacité du tank</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 18,
  },
  truckBody: {
    width: 180,
    height: 48,
    backgroundColor: '#A3C9A8',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'flex-start',
    position: 'relative',
    overflow: 'hidden',
  },
  tank: {
    height: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1,
  },
  tankText: {
    color: '#3A5A40',
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
    zIndex: 2,
    width: '100%',
    textAlign: 'center',
  },
  wheelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
    marginTop: -10,
  },
  wheel: {
    width: 22,
    height: 22,
    backgroundColor: '#444',
    borderRadius: 11,
    marginHorizontal: 10,
  },
  label: {
    marginTop: 6,
    color: '#6C757D',
    fontSize: 13,
  },
});

export default TruckCapacity; 