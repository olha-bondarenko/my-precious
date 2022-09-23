import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

import defaultStyles from '../config/styles'

const Card = ({title, subTitle, image}) => {
  return (
    <View style={styles.card}>
        <Image style={styles.image} source={image}/>
        <View style={styles.detailsContainer}>
            <Text style={[styles.title, defaultStyles.text]} numberOfLines={1}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: defaultStyles.colors.white,
        marginBottom: 20,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200,
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        marginBottom: 7
    },
    subTitle: {
        color: defaultStyles.colors.primary,
        fontWeight: 'bold'
    }
})

export default Card