#!/bin/bash

echo "🔧 Fixing Android Studio issues..."

# Clean Android build
echo "🧹 Cleaning Android build..."
cd android
./gradlew clean
cd ..

# Clear Metro cache
echo "🗑️ Clearing Metro cache..."
npx react-native start --reset-cache &

# Wait a moment for Metro to start
sleep 5

# Kill Metro and restart
pkill -f "react-native start"
sleep 2

echo "✅ Android fixes applied!"
echo "📱 Now run: npm run android" 