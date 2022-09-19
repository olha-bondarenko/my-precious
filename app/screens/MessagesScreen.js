import React, { useState } from 'react'
import { FlatList, StyleSheet, View, Platform, StatusBar } from 'react-native'
import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const initMessages = [
    {
        id: 1,
        title: 'Title test',
        description: 'Description Test',
        image: require('../assets/avatar.jpg')
    },
    {
        id: 2,
        title: 'Title test 222',
        description: 'Description Test 2',
        image: require('../assets/avatar.jpg')
    }
]

const MessagesScreen = () => {
    const [messages, setMessages] = useState(initMessages);
    const [refresh, setRefresh] = useState(false);
    const handleDelete = message => {
        setMessages(messages.filter(item => item.id !== message.id));
    }
  return (
      <Screen>
        <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) => 
                <ListItem 
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log('message clicked', item)}
                    renderRightActions={() => 
                        <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
                />} 
            ItemSeparatorComponent={() => <ListItemSeparator />}
            refreshing={refresh}
            onRefresh={() => setMessages(initMessages)}
        />
        </Screen>
  )
}

const styles = StyleSheet.create({
})

export default MessagesScreen