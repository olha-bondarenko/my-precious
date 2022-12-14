import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import defaultStyles from '../config/styles'

const AppButton = ({title, onPress, color = 'primary'}) => {
  return (
    <TouchableOpacity 
      style={[styles.button, {backgroundColor: defaultStyles.colors[color]}]} 
      onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: defaultStyles.colors.primary,
        borderRadius: 25,
        justufyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 5,
    },
    text: {
        color: defaultStyles.colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

export default AppButton