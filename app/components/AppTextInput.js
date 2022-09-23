import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'

const AppTextInput = ({ icon, width='100%', ...props }) => {
  return (
    <View style={[styles.container, {width}]}>
        {icon && <MaterialCommunityIcons 
            name={icon} 
            size={20}
            color={defaultStyles.colors.grey}
            style={styles.icon}/>}
        <TextInput 
            style={defaultStyles.text}
            {...props}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.lightGrey,
        borderRadius: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    }
})

export default AppTextInput