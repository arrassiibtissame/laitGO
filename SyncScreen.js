import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const mockUnsynced = [
  { id: '1', type: 'Collecte', info: 'Ferme Benali, 40L' },
  { id: '2', type: 'Collecte', info: 'Ferme Othmani, 45L' },
];

const SyncScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Synchronisation</Text>
      <Text style={styles.status}>Statut : Hors ligne</Text>
      <Text style={styles.subtitle}>Données non synchronisées :</Text>
      <FlatList
        data={mockUnsynced}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.unsyncedItem}>
            <Text>{item.type} - {item.info}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Synchroniser maintenant</Text>
      </TouchableOpacity>
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
  status: {
    color: '#A3C9A8',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 8,
    color: '#3A5A40',
  },
  unsyncedItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: '#A3C9A8',
  },
  button: {
    width: '100%',
    backgroundColor: '#A3C9A8',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default SyncScreen; 