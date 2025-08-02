@echo off
echo 🔧 Fixing Android Studio issues...

REM Clean Android build
echo 🧹 Cleaning Android build...
cd android
call gradlew clean
cd ..

REM Clear Metro cache
echo 🗑️ Clearing Metro cache...
npx react-native start --reset-cache

echo ✅ Android fixes applied!
echo 📱 Now run: npm run android
pause 