import { StyleSheet, Text, SafeAreaView, TouchableWithoutFeedback, Image } from 'react-native';
import { useState } from 'react'
import 'react-native-gesture-handler';

import Screen from './app/components/Screen'
import AppPicker from './app/components/AppPicker'
import AppTextInput from './app/components/AppTextInput';

const categories = [
  { key: 'rings', value: 'Rings' },
  { key: 'earrings', value: 'Earrings' },
  { key: 'necklaces', value: 'Necklaces' },
  { key: 'bracelets', value: 'Bracelets' }
]

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker 
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        items={categories} 
        icon='apps' 
        placeholder='Category'
      />
      <AppTextInput icon='email' placeholder='Email'/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
