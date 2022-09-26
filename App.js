import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import ListingEditScreen from './app/screens/ListingEditScreen';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';


const categories = [
  { key: 'rings', value: 'Rings' },
  { key: 'earrings', value: 'Earrings' },
  { key: 'necklaces', value: 'Necklaces' },
  { key: 'bracelets', value: 'Bracelets' }
]
 
export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
