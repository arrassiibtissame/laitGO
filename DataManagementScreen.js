import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import ApiService from '../services/api';

const DataManagementScreen = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [exportedData, setExportedData] = useState(null);
  const [importData, setImportData] = useState('');

  const handleExport = async (dataType = 'all') => {
    setLoading(true);
    try {
      const data = await ApiService.exportData(dataType);
      setExportedData(data);
      Alert.alert(
        'Success',
        `Data exported successfully! ${Object.keys(data).length} data types exported.`,
        [{ text: 'OK' }]
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to export data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleImport = async () => {
    if (!importData.trim()) {
      Alert.alert('Error', 'Please enter data to import.');
      return;
    }

    setLoading(true);
    try {
      const parsedData = JSON.parse(importData);
      const validationErrors = ApiService.validateImportData(parsedData);
      
      if (validationErrors.length > 0) {
        Alert.alert('Validation Error', `Please fix the following errors:\n${validationErrors.join('\n')}`);
        return;
      }

      await ApiService.importData(parsedData);
      Alert.alert('Success', 'Data imported successfully!');
      setImportData('');
    } catch (error) {
      if (error instanceof SyntaxError) {
        Alert.alert('Error', 'Invalid JSON format. Please check your data.');
      } else {
        Alert.alert('Error', 'Failed to import data. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const renderExportedData = () => {
    if (!exportedData) return null;

    return (
      <View style={styles.dataContainer}>
        <Text style={styles.sectionTitle}>Exported Data Preview:</Text>
        <ScrollView style={styles.dataScroll}>
          {Object.entries(exportedData).map(([key, value]) => (
            <View key={key} style={styles.dataSection}>
              <Text style={styles.dataTypeTitle}>{key.toUpperCase()}:</Text>
              <Text style={styles.dataContent}>
                {Array.isArray(value) ? `${value.length} items` : JSON.stringify(value, null, 2)}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Data Management</Text>
      
      {/* Export Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Export Data</Text>
        <Text style={styles.description}>
          Export your data to share with other agents or for backup purposes.
        </Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleExport('all')}
            disabled={loading}
          >
            <Text style={styles.buttonText}>Export All Data</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleExport('collections')}
            disabled={loading}
          >
            <Text style={styles.buttonText}>Export Collections</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleExport('agents')}
            disabled={loading}
          >
            <Text style={styles.buttonText}>Export Agents</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Import Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Import Data</Text>
        <Text style={styles.description}>
          Import data from other agents or restore from backup.
        </Text>
        
        <TextInput
          style={styles.textArea}
          placeholder="Paste JSON data here..."
          value={importData}
          onChangeText={setImportData}
          multiline
          numberOfLines={8}
          textAlignVertical="top"
        />
        
        <TouchableOpacity
          style={[styles.button, styles.importButton]}
          onPress={handleImport}
          disabled={loading}
        >
          <Text style={styles.buttonText}>Import Data</Text>
        </TouchableOpacity>
      </View>

      {/* Loading Indicator */}
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#A3C9A8" />
          <Text style={styles.loadingText}>Processing...</Text>
        </View>
      )}

      {/* Exported Data Display */}
      {renderExportedData()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8F2',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3A5A40',
    marginBottom: 30,
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3A5A40',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    lineHeight: 20,
  },
  buttonContainer: {
    gap: 10,
  },
  button: {
    backgroundColor: '#A3C9A8',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  importButton: {
    backgroundColor: '#4A90E2',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#D1E7DD',
    borderRadius: 10,
    padding: 15,
    fontSize: 14,
    backgroundColor: '#fff',
    marginBottom: 15,
    minHeight: 120,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  loadingText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
  dataContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
  },
  dataScroll: {
    maxHeight: 200,
  },
  dataSection: {
    marginBottom: 15,
  },
  dataTypeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3A5A40',
    marginBottom: 5,
  },
  dataContent: {
    fontSize: 12,
    color: '#666',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
  },
});

export default DataManagementScreen; 