import React, { useRef, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Animated, TextInput, TouchableOpacity, Alert } from 'react-native';
import '../i18n'; // Pour l'initialisation i18n
import { useTranslation } from 'react-i18next';
import ApiService from '../services/api';

const AuthScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    setLoading(true);
    try {
      // For demo purposes, we'll use a simple validation
      // In a real app, you would call ApiService.login(email, password)
      if (email === 'demo@laitgo.com' && password === 'demo123') {
        // Simulate successful login
        setTimeout(() => {
          navigation.replace('Dashboard');
        }, 1000);
      } else {
        Alert.alert('Error', 'Invalid credentials. Use demo@laitgo.com / demo123');
      }
    } catch (error) {
      Alert.alert('Error', 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/images/photo1.jpg')}
        style={[styles.image, { opacity: fadeAnim }]}
        resizeMode="cover"
      />
      <Text style={styles.title}>{t('welcome')}</Text>
      <TextInput 
        style={styles.input} 
        placeholder={t('email')} 
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput 
        style={styles.input} 
        placeholder={t('password')} 
        secureTextEntry 
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity 
        style={[styles.button, loading && styles.buttonDisabled]} 
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Logging in...' : t('login')}
        </Text>
      </TouchableOpacity>
      
      <Text style={styles.demoText}>
        Demo: demo@laitgo.com / demo123
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8F2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 220,
    height: 180,
    marginBottom: 30,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#3A5A40',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#D1E7DD',
  },
  button: {
    width: '100%',
    backgroundColor: '#A3C9A8',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  demoText: {
    marginTop: 20,
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

export default AuthScreen; 