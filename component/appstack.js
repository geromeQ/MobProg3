import React from 'react';
import LoginScreen from '../screens/loginScreen';
import HomeScreen from '../screens/homeScreen';
import LandingScreen from '../screens/landingScreen';
import AccountRecovery from '../screens/accountRecovery';
import LogIn from './LogIn'; // Import the updated LogIn component with registration functionality
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={LandingScreen} name="Landing" options={{ headerShown: false }} />
      <Stack.Screen component={LogIn} name="Login" options={{ headerShown: false }} /> {/* Use the updated LogIn component here */}
      <Stack.Screen component={HomeScreen} name="Home" options={{ headerShown: false }} />
      <Stack.Screen component={LoginScreen} name="OldLogin" options={{ headerShown: false }} /> {/* If needed, keep the old LoginScreen */}
      <Stack.Screen component={AccountRecovery} name="Recovery" options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
