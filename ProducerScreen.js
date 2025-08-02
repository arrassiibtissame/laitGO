import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const mockProducer = {
  id: '1',
  name: 'Ferme Benali',
  location: 'Douar El Kharroub',
  avgQuantity: 42,
  history: [
    { date: '2024-06-01', quantity: 40 },
    { date: '2024-05-31', quantity: 45 },
    { date: '2024-05-30', quantity: 41 },
  ],
};

const ProducerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{mockProducer.name}</Text>
      <Text style={styles.label}>ID: {mockProducer.id}</Text>
      <Text style={styles.label}>Localisation: {mockProducer.location}</Text>
      <Text style={styles.label}>Quantité moyenne livrée: {mockProducer.avgQuantity} L</Text>
      <Text style={styles.subtitle}>Historique des collectes</Text>
      <FlatList
        data={mockProducer.history}
        keyExtractor={item => item.date}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text>{item.date} : {item.quantity} L</Text>
          </View>
        )}
      />
      <View style={styles.mapPlaceholder}>
        <Text style={{ color: '#6C757D' }}>[Carte de localisation ici]</Text>
      </View>
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
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: '#3A5A40',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 18,
    marginBottom: 8,
    color: '#3A5A40',
  },
  historyItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: '#A3C9A8',
  },
  mapPlaceholder: {
    marginTop: 24,
    height: 120,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProducerScreen; 