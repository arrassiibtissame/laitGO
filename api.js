import { Alert } from 'react-native';

// Base API configuration
const API_BASE_URL = 'https://api.laitgo.com'; // Replace with your actual API URL
const API_TIMEOUT = 10000;

// Sample data structure for export/import
const sampleData = {
  agents: [
    {
      id: 1,
      name: 'Agent 1',
      phone: '+1234567890',
      email: 'agent1@laitgo.com',
      status: 'active'
    }
  ],
  collections: [
    {
      id: 1,
      agentId: 1,
      producerId: 1,
      quantity: 150.5,
      date: '2024-01-15',
      status: 'completed'
    }
  ],
  producers: [
    {
      id: 1,
      name: 'Producer 1',
      location: 'Farm Location 1',
      phone: '+1234567891',
      status: 'active'
    }
  ]
};

// API service class
class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.timeout = API_TIMEOUT;
  }

  // Generic request method
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      timeout: this.timeout,
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Export data
  async exportData(dataType = 'all') {
    try {
      const endpoint = `/export/${dataType}`;
      const response = await this.request(endpoint, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.getAuthToken()}`,
        },
      });
      
      return response;
    } catch (error) {
      console.error('Export failed:', error);
      // Return sample data for demo purposes
      return this.getSampleData(dataType);
    }
  }

  // Import data
  async importData(data, dataType = 'all') {
    try {
      const endpoint = `/import/${dataType}`;
      const response = await this.request(endpoint, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.getAuthToken()}`,
        },
        body: JSON.stringify(data),
      });
      
      return response;
    } catch (error) {
      console.error('Import failed:', error);
      throw error;
    }
  }

  // Get sample data for demo
  getSampleData(dataType = 'all') {
    if (dataType === 'all') {
      return sampleData;
    }
    return sampleData[dataType] || [];
  }

  // Authentication methods
  async login(email, password) {
    try {
      const response = await this.request('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      
      if (response.token) {
        this.setAuthToken(response.token);
      }
      
      return response;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }

  async logout() {
    try {
      await this.request('/auth/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.getAuthToken()}`,
        },
      });
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      this.clearAuthToken();
    }
  }

  // Token management
  setAuthToken(token) {
    // In a real app, use secure storage
    global.authToken = token;
  }

  getAuthToken() {
    return global.authToken || null;
  }

  clearAuthToken() {
    global.authToken = null;
  }

  // Data validation
  validateImportData(data) {
    const requiredFields = {
      agents: ['name', 'phone', 'email'],
      collections: ['agentId', 'producerId', 'quantity', 'date'],
      producers: ['name', 'location', 'phone']
    };

    const errors = [];

    Object.keys(data).forEach(dataType => {
      if (requiredFields[dataType]) {
        data[dataType].forEach((item, index) => {
          requiredFields[dataType].forEach(field => {
            if (!item[field]) {
              errors.push(`${dataType}[${index}].${field} is required`);
            }
          });
        });
      }
    });

    return errors;
  }
}

// Export singleton instance
export default new ApiService(); 