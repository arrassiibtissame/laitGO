import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../screens/AuthScreen';
import DashboardScreen from '../screens/DashboardScreen';
import DataManagementScreen from '../screens/DataManagementScreen';
import CollectScreen from '../screens/CollectScreen';
import HistoryScreen from '../screens/HistoryScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator 
    screenOptions={{ 
      headerShown: false,
      cardStyle: { backgroundColor: '#F6F8F2' }
    }}
  >
    <Stack.Screen name="Auth" component={AuthScreen} />
    <Stack.Screen name="Dashboard" component={DashboardScreen} />
    <Stack.Screen name="DataManagement" component={DataManagementScreen} />
    <Stack.Screen name="Collect" component={CollectScreen} />
    <Stack.Screen name="History" component={HistoryScreen} />
    <Stack.Screen name="Settings" component={SettingsScreen} />
  </Stack.Navigator>
);

export default AppNavigator; 