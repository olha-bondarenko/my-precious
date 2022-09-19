import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import ListItem from '../components/ListItem'

import colors from '../config/colors'

const ListingDetails = () => {
  return (
    <View>
        <Image style={styles.image} source={require('../assets/card-image-1.png')}/>
        <View style={styles.detailsContainer}>
            <Text style={styles.title}>Beautiful Opal Ring</Text>
            <Text style={styles.price}>€200</Text>
            <View style={styles.userContainer}>
                <ListItem 
                image={require('../assets/avatar.jpg')}
                title='Olga Bondarenko'
                subTitle='3 Listings'/>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        marginBottom: 7,
        fontSize: 24,
        fontWeight: '500'
    },
    price: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 40
    }
})

export default ListingDetails