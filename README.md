# LaitGO - Milk Collection Management App

A React Native application for managing milk collection operations with data export/import capabilities.

## Features

- **Authentication**: Secure login system for agents
- **Dashboard**: Overview of collection statistics and quick access to features
- **Data Management**: Export and import data for sharing between agents
- **Milk Collection**: Record collection data from producers
- **History**: View past collection records
- **Settings**: App configuration and preferences

## Data Export/Import API

The app includes a comprehensive API service for data management:

### Export Features
- Export all data (agents, collections, producers)
- Export specific data types (collections, agents, producers)
- JSON format for easy sharing and backup

### Import Features
- Import data from other agents
- Data validation to ensure integrity
- Support for partial data imports

### API Endpoints
- `POST /export/{dataType}` - Export data
- `POST /import/{dataType}` - Import data
- `POST /auth/login` - Authentication
- `POST /auth/logout` - Logout

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd LaitGO
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **iOS Setup** (if developing for iOS)
   ```bash
   cd ios
   pod install
   cd ..
   ```

## Running the App

### Android
```bash
# Start Metro bundler
npm start

# Run on Android device/emulator
npm run android
```

### iOS
```bash
# Start Metro bundler
npm start

# Run on iOS simulator
npm run ios
```

## Demo Credentials

For testing purposes, use these credentials:
- **Email**: demo@laitgo.com
- **Password**: demo123

## Data Management Usage

### Exporting Data
1. Navigate to Dashboard → Data Management
2. Choose export type:
   - **Export All Data**: Complete backup
   - **Export Collections**: Only collection records
   - **Export Agents**: Only agent information
3. Data will be displayed in JSON format for copying

### Importing Data
1. Navigate to Dashboard → Data Management
2. Paste JSON data in the import field
3. Click "Import Data"
4. System will validate and import the data

### Sample Data Structure
```json
{
  "agents": [
    {
      "id": 1,
      "name": "Agent 1",
      "phone": "+1234567890",
      "email": "agent1@laitgo.com",
      "status": "active"
    }
  ],
  "collections": [
    {
      "id": 1,
      "agentId": 1,
      "producerId": 1,
      "quantity": 150.5,
      "date": "2024-01-15",
      "status": "completed"
    }
  ],
  "producers": [
    {
      "id": 1,
      "name": "Producer 1",
      "location": "Farm Location 1",
      "phone": "+1234567891",
      "status": "active"
    }
  ]
}
```

## Troubleshooting

### Android Studio Issues
1. **Clean and rebuild**:
   ```bash
   cd android
   ./gradlew clean
   cd ..
   npm run android
   ```

2. **Clear Metro cache**:
   ```bash
   npm start -- --reset-cache
   ```

3. **Check Android SDK**: Ensure you have the correct SDK versions installed

### Common Issues
- **Permission errors**: Make sure all required permissions are granted
- **Build failures**: Check that all dependencies are properly installed
- **Metro bundler issues**: Clear cache and restart

## Dependencies

- React Native 0.72.5
- React Navigation 6.x
- React Native Camera 4.2.1
- React i18next for internationalization

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable UI components
├── i18n/           # Internationalization
├── models/         # Data models
├── navigation/     # Navigation configuration
├── screens/        # App screens
├── services/       # API services
├── store/          # State management
└── utils/          # Utility functions
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License. 