import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import Card from '../components/Card'
import Screen from '../components/Screen'

import routes from '../navigation/routes'
import colors from '../config/colors';

const listings = [
    {
        id: 1,
        title: 'Bautiful Opal Ring',
        price: 100,
        image: require('../assets/card-image-1.png')
    },
    {
        id: 2,
        title: 'Stunning Opal-Sapphire Ring',
        price: 100,
        image: require('../assets/card-image-2.jpeg')
    }
];

const ListingsScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
        <FlatList 
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({ item }) => 
                <Card 
                    title={item.title}
                    subTitle={'€' + item.price}
                    image={item.image}
                    onPress={()=> navigation.navigate(routes.LISTING_DETAILS, item)}/>
            }/>
    </Screen>
  )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.lightGrey
    }
})
export default ListingsScreen