import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons'

import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name='Feed' 
                component={FeedNavigator} 
                options={{
                    tabBarIcon: ({color, size=20}) => 
                        <MaterialCommunityIcons name='home' color={color} size={size}/>
                }}/>
            <Tab.Screen 
                name='ListingEdit' 
                component={ListingEditScreen}
                options={({ navigation }) => ({
                    tabBarButton: () => (
                      <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)}/>
                    ),
                    tabBarIcon: ({ color, size=20 }) => (
                      <MaterialCommunityIcons
                        name="plus-circle"
                        color={color}
                        size={size}
                      />
                    ),
                  })}/>
            <Tab.Screen 
                name='Account' 
                component={AccountNavigator}
                options={{
                    tabBarIcon: ({color, size=20}) => 
                        <MaterialCommunityIcons name='account' color={color} size={size}/>
                }}/>
        </Tab.Navigator>
    )
}

export default AppNavigator;