import React, { useEffect } from 'react'
import { View, StyleSheet, Image, Alert, TouchableWithoutFeedback } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

import colors from '../config/colors'


const ImageInput = ({ imageUri, onChangeImage }) => {
    useEffect(() => { requestPermission() }, [])

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted) alert('Please enable permission to access the library')
    }
    
    const handlePress = () => {
        if (!imageUri) selectImage();
        else Alert.alert('Delete', 'Are you sure you want to delete this image?', [
            { text: 'Yes', onPress: () => onChangeImage(null) },
            { text: 'No'}
        ])
    }

    const selectImage = async () => {
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              quality: 0.5
          });
          
          if (!result.cancelled) onChangeImage(result.uri)
        } catch (error) {
          console.log(error)
        }
      }
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
            {!imageUri && <MaterialCommunityIcons name='camera' color={colors.grey} size={40}/>}
            {imageUri && <Image source={{uri: imageUri}} style={styles.image}/> }
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.lightGrey,
        borderRadius: 15,
        justifyContent: 'center',
        overflow: 'hidden',
        height: 100,
        width: 100
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default ImageInput