import React, {useState} from 'react'
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Modal } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FlatList } from 'react-native-gesture-handler'

import Screen from './Screen'
import PickerItem from './PickerItem'

import defaultStyles from '../config/styles'

const AppPicker = ({ icon, items, placeholder, onSelectItem, selectedItem }) => {
   const [modalVisible, setModalVisible] = useState(false);
  return (
      <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style={styles.container}>
                {icon && <MaterialCommunityIcons 
                    name={icon} 
                    size={20}
                    color={defaultStyles.colors.grey}
                    style={styles.icon}/>}
                <Text style={styles.text}>{selectedItem ? selectedItem.value : placeholder}</Text>
                <MaterialCommunityIcons 
                    name='chevron-down'
                    size={20}
                    color={defaultStyles.colors.grey}/>
            </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType='slide'>
            <Screen>
                <Button title='Close' onPress={() => setModalVisible(false)}></Button>
                <FlatList 
                    data={items}
                    keyExtractor={(item) => item.value.toString()}
                    renderItem={({ item }) => 
                    <PickerItem 
                    label={item.value}
                    onPress={() => {
                        setModalVisible(false);
                        onSelectItem(item);
                    }}/>}
                />
            </Screen>
        </Modal>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.lightGrey,
        borderRadius: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1
    }
})

export default AppPicker