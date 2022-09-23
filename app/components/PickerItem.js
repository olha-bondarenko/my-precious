import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{item.value}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    text: {
        padding: 20
    }
})

export default PickerItem