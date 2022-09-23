import React, {useState} from 'react'
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Modal } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FlatList } from 'react-native-gesture-handler'

import Screen from './Screen'
import PickerItem from './PickerItem'

import defaultStyles from '../config/styles'

const AppPicker = ({ icon, items, numberOfColumns = 1, PickerItemComponent = PickerItem, placeholder, onSelectItem, selectedItem, width='100%' }) => {
   const [modalVisible, setModalVisible] = useState(false);
  return (
      <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style={[styles.container, {width}]}>
                {icon && <MaterialCommunityIcons 
                    name={icon} 
                    size={20}
                    color={defaultStyles.colors.grey}
                    style={styles.icon}/>}
                { selectedItem ? 
                    <Text style={[defaultStyles.text, styles.text]}>{selectedItem.value}</Text> 
                    :
                    <Text style={[defaultStyles.text, styles.text]}>{placeholder}</Text>
                }
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
                    numColumns={numberOfColumns}
                    keyExtractor={(item) => item.value.toString()}
                    renderItem={({ item }) => 
                    <PickerItemComponent 
                    item={item}
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