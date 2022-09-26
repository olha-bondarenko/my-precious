import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetails from '../screens/ListingDetails';

const Stack = createNativeStackNavigator();

const FeedNavigator = () => {
    return (
        <Stack.Navigator presentation='modal' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Listings' component={ListingsScreen}/>
            <Stack.Screen name='ListingDetails' component={ListingDetails}/>
        </Stack.Navigator>
    )
}

export default FeedNavigator;