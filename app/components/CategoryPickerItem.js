import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Icon from './Icon';

const CategoryPickerItem = ({ item, onPress}) => {

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <Icon 
            backgroundColor={item.backgroundColor} 
            name={item.icon} 
            size={80}/>
          <Text style={styles.label}>{item.value}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'center',
        width: '33%'
    },
    label: {
        marginTop: 5,
        textAlign: 'center'
    }
})

export default CategoryPickerItem