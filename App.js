import { StyleSheet, Text, SafeAreaView, TouchableWithoutFeedback, Image } from 'react-native';
import { View } from 'react-native';
import ListingDetails from './app/screens/ListingDetails'
import WelcomeScreen from './app/screens/WelcomeScreen'
import AppButton from './app/components/AppButton'
import ViewImage from './app/screens/ViewImage'
import 'react-native-gesture-handler';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen'
import Icon from './app/components/Icon'
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen'

export default function App() {
  return (
    <ListingsScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
