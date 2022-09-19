import React from 'react'
import { View, StyleSheet } from 'react-native'
import colors from '../config/colors'

const ListItemSeparator = () => {
  return (
    <View style={styles.listSeparator}/>
  )
}

const styles = StyleSheet.create({
    listSeparator: {
        width: '100%',
        height: 1,
        backgroundColor: colors.lightGrey
    }
})

export default ListItemSeparator