import React from 'react'
import { View, StyleSheet,FlatList } from 'react-native'

import ListItem from '../components/ListItem'
import Icon from '../components/Icon'
import Screen from '../components/Screen'
import colors from '../config/colors'
import ListItemSeparator from '../components/ListItemSeparator'

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary
    }
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary 
    }
  }
]

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem 
          title='Olha Bondarenko'
          subTitle='olga@gmail.com'
          image={require('../assets/avatar.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList 
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => 
           <ListItem 
           title={item.title}
           IconComponent={
             <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
           }/>
        }
        />
      </View>
      <ListItem 
        title='Log Out'
        IconComponent={
          <Icon name='logout' backgroundColor={colors.black} />
        }/>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  screen: {
    backgroundColor: colors.lightGrey
  }
})

export default AccountScreen